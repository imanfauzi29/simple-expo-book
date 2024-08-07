export type RecentBooksType = {
    id: string
    title: string
    subtitle: string
    authors: string
    image: string
    url: string
}

export type BookDetailType = {
    status: string
    description: string
    publisher: string
    pages: string
    year: string
    download: string
} & RecentBooksType
