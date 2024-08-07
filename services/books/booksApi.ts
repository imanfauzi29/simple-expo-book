import {baseAPI} from "@/services/api";
import {ResonseSuccessOrErrorType, ResponseSuccessType} from "@/services/types";
import {BookDetailType, RecentBooksType} from "@/services/books/types";

export const getRecentBooks = async (): Promise<ResonseSuccessOrErrorType<RecentBooksType[]>> => {
    try {
        const res = await baseAPI.get<ResponseSuccessType<RecentBooksType[]>>('/recent')
        return res.data
    } catch (err) {
        const error = err as Error
        return {
            status: 'error',
            message: error.message
        }
    }
}

export const searchBooks = async (query: string): Promise<ResonseSuccessOrErrorType<RecentBooksType[]>> => {
    try {
        const res = await baseAPI.get<ResponseSuccessType<RecentBooksType[]>>(`/search/${query}`)
        return res.data
    } catch (err) {
        const error = err as Error
        return {
            status: 'error',
            message: error.message
        }
    }
}

export const getBookDetail = async (id: string): Promise<ResonseSuccessOrErrorType<BookDetailType>> => {
    try {
        const res = await baseAPI.get<ResponseSuccessType<BookDetailType>>(`/book/${id}`)
        return res.data
    } catch (err) {
        const error = err as Error
        return {
            status: 'error',
            message: error.message
        }
    }
}