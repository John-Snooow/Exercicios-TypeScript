interface Book {
    title: string
    pages: number
    author: string
    description: string
}

//Omit para omitir campos
//aqui ele esta omitindo a description e pages
const book: Omit<Book, "description" | "pages"> = { title: "TypeScript", author: "Rodrigo"}