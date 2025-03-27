type Person = {
    id: number,
    name: string
}

type Teacher = Person & {//intersecção de tipos Person e Teacher/ aqui eu estou estendendo usando o &
    subjects: string[]
}

type Student = Person & {
    age: number
}

let teacher: Teacher
let student: Student