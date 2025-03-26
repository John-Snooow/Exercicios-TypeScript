// undefined = quando a variavel não teve um valor atribuido para ela
let value: number
value = 12 //se eu não definir o valor ele fica undefined no cosole a baixo
console.log(value)

let user = {
    name: "Rodrigo"
}
// console.log(user.email) aqui eu tentei chamar no console um emal sendo que "user" não tem um email


// null (ausência intencional de valor) quando eu quero definir intentamente uma ausência de um valor
let email = null //se eu definir null ele fica null no cosole a baixo
console.log(email)

if (!email){//verifica se o email nao existe
    console.log("Informe o e-mail!")
}