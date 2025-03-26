interface Product {//criando uma interface com o nome product primeira letra maiuscula
    id: number,
    name: string
}

function newProduct(product: Product){
}

newProduct({ id: 1, name: "Produto x"})