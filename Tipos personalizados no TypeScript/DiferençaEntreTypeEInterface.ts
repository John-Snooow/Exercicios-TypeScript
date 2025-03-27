// Interface x Type
interface IBaseProduct {
    price: number
}

interface IProduct extends IBaseProduct {
    id: number,
    name: string
}

interface IProduct {// aqui eu sobreescrevi o type com o  mesmo nome "IProduct"/ uma interface com mesmo nome unifica elas
    quantity: number// e adicionei uma pripriedade que não existe nos outros
}

type TBaseProduct = {
    price: number
}

type TProduct = TBaseProduct & {// se eu criar um type com o mesmo nome desse, ele vai acusar um erra pois não pode sobreescrever com o & e adicionar novos campos
    id: number,
    name: string
}

let product1: IProduct = { id: 1, name: "Produto 1", price: 500, quantity: 12}// qaui foi adicionado a quantidade
let product2: TProduct = { id: 2, name: "Produto 2", price: 550}

type TypeString = string
type TypeNumber = number

// interface X extends string {}  comentei esta linha para parar de apresentar o erro de tipagem Mas esta linha serve para mostrar que a interface recusa tipos personalizados

//você pode sobreescrever o interface mas não o type
//O type permite utilizar tipos primitivos para criar tipos personalizados e a interface não permite

//a Iterface é mais ultilizada