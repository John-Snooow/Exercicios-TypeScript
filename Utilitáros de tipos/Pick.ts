//pegando apenas os campos que eu quero
interface Book {
    title: string
    pages: number
    author: string
    description: string
}

interface BookPreview {
    title: string
}

//pegando apenas os campos que eu quero
const book1: BookPreview = { title: "TypeScript"}
//pegando apenas os campos que eu quero
const book2: Pick<Book, "title" | "pages"> = { title: "TypeScript", pages: 150}