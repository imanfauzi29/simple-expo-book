import {baseAPI} from "@/services/api";
import {ResonseSuccessOrErrorType, ResponseSuccessType} from "@/services/types";
import {BookDetailType, RecentBooksType} from "@/services/books/types";
import {AxiosError} from "axios";

export const getRecentBooks = async (): Promise<ResponseSuccessType<RecentBooksType[]>> => {
    try {
        const res = await baseAPI.get<ResponseSuccessType<RecentBooksType[]>>('/recent')
        return res.data
    } catch (err) {
        const error = err as AxiosError
        throw error.response
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

export const getBookDetail = async (id: string): Promise<BookDetailType> => {
    try {
        const res = await baseAPI.get(`/book/${id}`)
        return res.data
    } catch (err) {
        const error = err as AxiosError
        throw error.response
    }
}