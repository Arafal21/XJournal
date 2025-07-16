export function getConfig() {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

    if (!apiBaseUrl) {
        throw new Error('App configuration error - missing NEXT_PUBLIC_API_BASE_URL env var')
    }

    return {
        baseUrl: apiBaseUrl,
    }
}