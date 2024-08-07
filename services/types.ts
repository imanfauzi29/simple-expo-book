export type ResponseSuccessType<T> = {
    status: string
    total: number
    books: T
}

export type ResponseErrorType = {
    status: string
    message: string
}

export type ResonseSuccessOrErrorType<T> = ResponseSuccessType<T> | ResponseErrorType