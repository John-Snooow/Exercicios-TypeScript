// Função com tipagem explícita
function sum (x: number, y: number): number {
    const result = x + y
    console.log("Resultado = " + result)
    // O retorno da função é o tipo number
    return result
}
// Chamando a função com os parâmetros necessários
const result = sum(7, 3)

// Função com tipagem implícita
const showMessage = (name: string): string => {
    const message = "Olá " + name
    // O retorno da função é o tipo string
    return message
}
// Chamando a função com o parâmetro necessário
showMessage("Rodrigo Gonçalves")