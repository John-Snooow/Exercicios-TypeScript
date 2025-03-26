//Estendendo tipagens
interface Person {
    id: number,
    name: string
}

interface Teacher extends Person {//Estendendo a interface Person para a interface Teacher
    // id: number,
    // name: string,
    subjects: string[]
}

interface Student extends Person {//Estendendo a interface Person para a interface Student
    // id: number,
    // name: string,
    age: number
}

// Criação de um objeto teacher que implementa a interface Teacher
let teacher: Teacher = { id: 1, name: "Rodrigo", subjects: ["JavaScript", "TypeScript"]}

// Criação de um objeto student que implementa a interface Student
let student: Student = { id: 2, name: "João", age: 23}