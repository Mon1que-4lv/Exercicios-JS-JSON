const produtos = [
    { "id": 1, "nome": "Smartphone", "preco": 1500, "categoria": "Eletrônicos", "estoque": 20 },
    { "id": 2, "nome": "Notebook", "preco": 4000, "categoria": "Eletrônicos", "estoque": 8 },
    { "id": 3, "nome": "Camiseta", "preco": 50, "categoria": "Vestuário", "estoque": 100 },
    { "id": 4, "nome": "Tênis", "preco": 200, "categoria": "Calçados", "estoque": 30 },
    { "id": 5, "nome": "Mouse", "preco": 80, "categoria": "Eletrônicos", "estoque": 15 },
    { "id": 6, "nome": "Teclado", "preco": 100, "categoria": "Eletrônicos", "estoque": 25 },
    { "id": 7, "nome": "Calça Jeans", "preco": 120, "categoria": "Vestuário", "estoque": 50 },
    { "id": 8, "nome": "Monitor", "preco": 900, "categoria": "Eletrônicos", "estoque": 10 },
    { "id": 9, "nome": "Fone de Ouvido", "preco": 150, "categoria": "Eletrônicos", "estoque": 40 },
    { "id": 10, "nome": "Sandália", "preco": 70, "categoria": "Calçados", "estoque": 35 }
];


// const produtosOrdenados = produtos.sort((a , b) => a.preco - b.preco);
// console.log(produtosOrdenados) 


// const produtosOrdenados = [...produtos].sort((a, b) =>
//     a.nome.localeCompare(b.nome)
// );
// console.log(produtosOrdenados)

// (localeCompare() compara duas strings levando em conta acentos e ordem alfabética correta.
// Usar [...produtos] garante que o array original não seja alterado.)



// const produtosOrdenados = produtos.sort((a , b) => b.estoque - a.estoque);
// console.log(produtosOrdenados) 


const produtosOrdenados = [...produtos].sort((a, b) => {
    const categoriaAlfabetica = a.categoria.localeCompare(b.categoria);
    if (categoriaAlfabetica !== 0) {
        return categoriaAlfabetica;
    }
    return a.preco - b.preco;
});

const listaFormatada = produtosOrdenados.map(produto => 
    `${produto.categoria} - ${produto.nome}: R$ ${produto.preco.toFixed(2).replace(".", ",")}`
);
console.log(listaFormatada)