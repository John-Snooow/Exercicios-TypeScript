//criando objeto onde todas as chaves são strings e os valores sao numbers
const scores: Record<string, number> = {
    "John": 50,
    "Jane": 75
}

//Limita valores
type Prfile = "admin" | "user" | "guest"
const user: Record<Prfile, number> = {
    "admin": 0,
    "user": 1,
    "guest": 2
}

//Objetos personalizados
interface User {
    name: string
    email: string
}
//criando um objeto onde as chaves sao numeros e os valores sao usuarios
const users: Record<number, User> = {
    1: { name: "John", email: "john@example" },
    2: { name: "Jane", email: "jane@example" }
}