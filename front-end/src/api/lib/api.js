'use server'

import { cookies } from 'next/headers'
import { customFetch } from './customFetch.js'
import {
    NoAuthTokenError,
    NotAuthenticatedError,
    TooManyRequestsError,
    ApiError
} from './ApiError.js'
import { getConfig } from './apiConfig.js'


export async function apiDelete(
    {
        path,
        query = undefined,
        requireAuth = false,
        returnData = true,
        headers = {},
        fetchFunction = undefined,
    }) {
    return await makeRequest({
        path,
        query,
        method: 'DELETE',
        body: undefined,
        requireAuth,
        returnData,
        jsonStringifyBody: false,
        headers,
        fetchFunction,
    });
}


export async function apiGet(
    {
        path,
        query = undefined,
        requireAuth = false,
        returnData = true,
        headers = {},
        fetchFunction = undefined,
    }) {
    return await makeRequest({
        path,
        query,
        method: 'GET',
        body: undefined,
        requireAuth,
        returnData,
        jsonStringifyBody: false,
        headers,
        fetchFunction,
    })
}

export async function apiPost(
    {
        path,
        query = undefined,
        body = {},
        requireAuth = false,
        returnData = true,
        jsonStringifyBody = true,
        headers = {},
        fetchFunction = undefined,
    }) {
    return await makeRequest({
        path,
        query,
        method: 'POST',
        body,
        requireAuth,
        returnData,
        jsonStringifyBody,
        headers,
        fetchFunction,
    })
}

export async function makeRequest(
    {
        path,
        query = undefined,
        method,
        body,
        requireAuth = false,
        requireJsonResponse = true,
        returnData = true,
        jsonStringifyBody = true,
        headers = {},
        fetchFunction = undefined,
    }
) {
    if (!headers['Accept']) {
        headers['Accept'] = 'application/json'
    }

    const cookieStore = await cookies()
    let token = cookieStore.get('accessToken')?.value || null

    if (requireAuth) {
        const refreshToken = cookieStore.get('refreshToken')?.value || null

        if (!token && !refreshToken) {
            throw new NoAuthTokenError(`No access and refresh tokens defined (calling ${path})`)
        }

        let jwtValid

        try {
            jwtValid = await isJwtValid(token)
        } catch (err) {
            console.error('Cannot validate access token - refreshing: ' + err)
            jwtValid = false
        }

        // refresh expired/invalid access token
        if (!jwtValid) {
            const removeTokens = () => {
                cookieStore.delete('accessToken')
                cookieStore.delete('refreshToken')
            }

            if (!refreshToken) {
                removeTokens()
                throw new NoAuthTokenError('Access token is missing, invalid or '
                    + 'expired, and refresh token is missing - logging user out')
            }

            try {
                const newTokens = await refreshTokens(refreshToken, fetchFunction)

                await setAuthTokens(newTokens.accessToken, newTokens.refreshToken)
                // use new token
                token = newTokens.accessToken
            } catch (err) {
                removeTokens()
                throw new NotAuthenticatedError('Failed to refresh tokens, logging user out')
            }
        }
    }

    if (token) {
        headers['Authorization'] = 'Bearer ' + token
    }

    const fetchOptions = {
        method: method,
        headers,
        fetchFunction,
    }

    if (body) {
        // handle form data correctly
        if (jsonStringifyBody && body instanceof FormData) {
            const formData = body
            body = {}
            // convert to an object
            formData.forEach((value, key) => body[key] = value)
        }

        fetchOptions.body = jsonStringifyBody ? JSON.stringify(body) : body

        if (jsonStringifyBody && !headers['Content-Type']) {
            headers['Content-Type'] = 'application/json'
        }
    }

    let url = getConfig().baseUrl + path

    if (query) {
        let queryString

        if (query instanceof URLSearchParams) {
            queryString = query.toString()
        } else {
            const removedUndefined = Object.fromEntries(Object.entries(query).filter(([k, v]) => v !== undefined))
            queryString = new URLSearchParams(removedUndefined).toString()
        }

        if (queryString.length) {
            if (!url.endsWith('?')) {
                url += '?'
            }

            url += queryString
        }
    }

    const response = await customFetch(url, fetchOptions)

    if (response.status === 204) {
        return null
    }

    const contentType = response.headers.get('content-type')

    if (!contentType || contentType.indexOf('application/json') === -1) {
        if (requireJsonResponse) {
            throw new ApiError('Non-JSON response received', response, undefined)
        }

        return await response.text()
    }

    const json = await response.json()

    if (json.success !== true) {
        if (response.status === 401 || json.code === 'INVALID_JWT_SIGNATURE') {
            throw new NotAuthenticatedError(json.message, response, json)
        }

        if (response.status === 429 || json.code === 'REQUEST_LIMIT_EXCEEDED') {
            throw new TooManyRequestsError(json.message, response, json)
        }

        throw new ApiError(json.message, response, json)
    }

    return returnData ? json.data : json
}

export async function refreshTokens(refreshToken, fetchFunction) {
    if (typeof refreshToken !== 'string') {
        throw new Error('refreshToken must be a string')
    }

    return await apiPost({
        path: '/auth/refresh-token',
        body: {
            refreshToken: refreshToken,
        },
        fetchFunction,
    })
}

export async function setAuthTokens(accessToken, refreshToken) {
    const cookieStore = await cookies()

    cookieStore.set('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/'
    })

    cookieStore.set('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/'
    })
}

export async function clearAuthTokens() {
    const cookieStore = await cookies()
    cookieStore.delete('accessToken')
    cookieStore.delete('refreshToken')
}

async function decodeJwtToken(token) {
    if (typeof token !== 'string') {
        throw new Error('token must be a string')
    }

    const split = token.split('.')

    if (split.length !== 3) {
        throw new Error('token is not divided into 3 parts')
    }

    const header = split[1]

    // base64 url decode
    const headerUrl = header
        .replace(/-/g, '+')
        .replace(/_/g, '/')

    let decoded

    try {
        decoded = Buffer.from(headerUrl, 'base64').toString()
    } catch (err) {
        throw new Error('invalid token - failed to decode base64 header')
    }

    let json

    try {
        json = JSON.parse(decoded)
    } catch (err) {
        throw new Error('invalid token - failed to parse JSON from header')
    }

    return json
}

async function isJwtValid(token) {
    const json = await decodeJwtToken(token)
    const expiration = json.exp

    if (typeof expiration !== 'number') {
        throw new Error('invalid token - expiration is not a number')
    }

    return expiration * 1000 >= Date.now()
}