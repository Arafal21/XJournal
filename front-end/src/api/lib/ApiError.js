export class ApiError extends Error {
    /** @var {Response|undefined} */
    response;
    /** @var {string|undefined} */
    code;
    /** @var {object|undefined} */
    data;

    constructor(message, response, data) {
        super(message);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ApiError);
        }
        this.name = 'ApiError';
        this.response = response;
        this.code = data?.code;
        this.data = data ?? { message: message };
    }
}

export class NotAuthenticatedError extends ApiError {
    constructor(message, response, data) {
        super(message, response, data);
    }
}

export class NoAuthTokenError extends NotAuthenticatedError {
    constructor(message, response, data) {
        super(message, response, data);
    }
}

export class TooManyRequestsError extends ApiError {
    constructor(message, response, data) {
        super(message, response, data);
    }
}
