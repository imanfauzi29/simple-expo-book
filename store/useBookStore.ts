import {create} from "zustand";
import {RecentBooksType} from "@/services/books/types";

type BookState = {
    recentBooks: RecentBooksType[]
    bookDetail?: RecentBooksType
    continueReading: RecentBooksType[]
    q: string
}

interface BookRepository {
    setBooks: (books: RecentBooksType[]) => void
    setQ: (q: string) => void
}

const useBookStore = create<BookState & BookRepository>()((set) => ({
    recentBooks: [],
    q: "",
    continueReading: [],
    setBooks: (recentBooks: RecentBooksType[]) => set(() => ({recentBooks})),
    setQ: (q: string) => set(() => ({q}))
}))

export default useBookStore