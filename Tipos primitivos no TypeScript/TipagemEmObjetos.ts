let user: { name: string, age: number, avatarUrl?: string } = { name: "Rodrigo", age: 17 }//fica optional com "?" no local onde esta o campo avatarUrl

/*
function signIn(email: string, password: string) {
    // Lógica de conectar usuário na aplicação
}

signIn("rodrigo@email.com", "123")
*/

function signIn({email, password}:{email: string, password: string}) {
    // Lógica de conectar usuário na aplicação
    console.log("Usuário " + email + " conectado!")
}

signIn({ email: "rodrigo@email.com", password: "123" })