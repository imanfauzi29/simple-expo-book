import {create} from "zustand";
import {RecentBooksType} from "@/services/books/types";

type BookState = {
    mainBooks: RecentBooksType[]
    recentBooks: RecentBooksType[]
    bookDetail?: RecentBooksType
    continueReading: RecentBooksType[]
    q: string
}

interface BookRepository {
    setBooks: (books: RecentBooksType[]) => void
    setQ: (q: string) => void
    setContinueReading: (continueReading: RecentBooksType[]) => void
    setMainBooks: (mainBooks: RecentBooksType[]) => void
    setBookDetail: (bookDetail: RecentBooksType) => void
}

const useBookStore = create<BookState & BookRepository>()((set) => ({
    recentBooks: [],
    mainBooks: [],
    q: "",
    continueReading: [],
    setBooks: (recentBooks: RecentBooksType[]) => set(() => ({recentBooks})),
    setQ: (q: string) => set(() => ({q})),
    setContinueReading: (continueReading: RecentBooksType[]) => set(() => ({continueReading})),
    setMainBooks: (mainBooks: RecentBooksType[]) => set(() => ({mainBooks})),
    setBookDetail: (bookDetail: RecentBooksType) => set(() => ({bookDetail})),
}))

export default useBookStore