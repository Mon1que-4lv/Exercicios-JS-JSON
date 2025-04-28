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

// const valorTotalEstoque = produtos.reduce((total, produto) => {
//     return total + (produto.preco * produto.estoque);
// }, 0);

// console.log(`Valor total em estoque: R$ ${valorTotalEstoque.toFixed(2)}`);



// let maisCaro = produtos[0];
// let maisBarato = produtos[0];

// for (let i = 1; i < produtos.length; i++) {
//   if (produtos[i].preco > maisCaro.preco) {
//     maisCaro = produtos[i];
//   }

//   if (produtos[i].preco < maisBarato.preco) {
//     maisBarato = produtos[i];
//   }
// }

// console.log("Produto mais caro:", maisCaro.nome, "- R$", maisCaro.preco);
// console.log("Produto mais barato:", maisBarato.nome, "- R$", maisBarato.preco);



// const totaisPorCategoria = {};
// const contagensPorCategoria = {};

// // Soma preços e conta quantos produtos tem por categoria
// for (let i = 0; i < produtos.length; i++) {
//   const categoria = produtos[i].categoria;
//   const preco = produtos[i].preco;

//   if (!totaisPorCategoria[categoria]) {
//     totaisPorCategoria[categoria] = 0;
//     contagensPorCategoria[categoria] = 0;
//   }

//   totaisPorCategoria[categoria] += preco;
//   contagensPorCategoria[categoria] += 1;
// }

// // Agora calcula a média
// const mediasPorCategoria = {};

// for (const categoria in totaisPorCategoria) {
//   mediasPorCategoria[categoria] = (totaisPorCategoria[categoria] / contagensPorCategoria[categoria]).toFixed(2);
// }

// console.log("Preço médio por categoria:", mediasPorCategoria);



// const contagemPorCategoria = {};

// for (let i = 0; i < produtos.length; i++) {
//   const categoria = produtos[i].categoria;

//   if (!contagemPorCategoria[categoria]) {
//     contagemPorCategoria[categoria] = 0;
//   }

//   contagemPorCategoria[categoria]++;
// }

// console.log("Quantidade por categoria:", contagemPorCategoria);



const valoresPorCategoria = produtos.reduce((acc, produto) => {
    const valorTotal = produto.preco * produto.estoque;
    if (acc[produto.categoria]) {
        acc[produto.categoria] += valorTotal;
    } else {
        acc[produto.categoria] = valorTotal;
    }
    return acc;
}, {});

// Encontra a categoria com o maior valor total
let categoriaComMaiorValor = '';
let maiorValor = 0;

for (const categoria in valoresPorCategoria) {
    if (valoresPorCategoria[categoria] > maiorValor) {
        maiorValor = valoresPorCategoria[categoria];
        categoriaComMaiorValor = categoria;
    }
}

console.log(`A categoria com o maior valor total em estoque é: ${categoriaComMaiorValor}`);