interface Product{
    id: number;
    name: string;
    quantity: number;
}
//criando um produto
const product1: Product = { id: 1, name: "produto 1", quantity: 10 };
//criando outro produto
const product2: typeof product1 = { id: 2, name: "produto 2", quantity: 5 };