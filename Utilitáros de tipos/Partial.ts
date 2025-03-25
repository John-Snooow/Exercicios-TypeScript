interface User {
    id: number,
    name: string,
    email: string
}

const newUser: User = { id: 1, name: "Rodrigo", email: "rodrigo@email.com"}

//Partial para atualizar o nome do usuario, psso atualizar qualquer campo se necessario
const updatedUser: Partial<User> = { name: "Rodrigo Gonçalves" }