const vendas = [
    { "id": 1, "data": "2023-01-10", "cliente": "Maria", "produtos": [
        { "id": 101, "nome": "Smartphone", "preco": 1200, "quantidade": 1 },
        { "id": 102, "nome": "Carregador", "preco": 80, "quantidade": 2 }
    ]},
    { "id": 2, "data": "2023-01-15", "cliente": "João", "produtos": [
        { "id": 103, "nome": "Notebook", "preco": 3500, "quantidade": 1 }
    ]},
    { "id": 3, "data": "2023-01-20", "cliente": "Pedro", "produtos": [
        { "id": 101, "nome": "Smartphone", "preco": 1200, "quantidade": 1 },
        { "id": 104, "nome": "Capa Protetora", "preco": 50, "quantidade": 1 },
        { "id": 105, "nome": "Fone Bluetooth", "preco": 180, "quantidade": 1 }
    ]},
    { "id": 4, "data": "2023-02-05", "cliente": "Ana", "produtos": [
        { "id": 106, "nome": "Tablet", "preco": 900, "quantidade": 1 },
        { "id": 107, "nome": "Teclado Bluetooth", "preco": 200, "quantidade": 1 },
        { "id": 108, "nome": "Mouse sem fio", "preco": 120, "quantidade": 1 }
    ]},
    { "id": 5, "data": "2023-02-10", "cliente": "Maria", "produtos": [
        { "id": 109, "nome": "Monitor", "preco": 800, "quantidade": 1 }
    ]}
];


// const nomesProdutosUnicos = [
//     ...new Set(
//         vendas.flatMap(venda => venda.produtos.map(produto => produto.nome))
//     )
// ];

// console.log(nomesProdutosUnicos);



// const totalPorCliente = {};

// vendas.forEach(venda => {
//     const cliente = venda.cliente;
//     const totalVenda = venda.produtos.reduce((soma, produto) => {
//         return soma + produto.preco * produto.quantidade;
//     }, 0);

//     if (!totalPorCliente[cliente]) {
//         totalPorCliente[cliente] = 0;
//     }

//     totalPorCliente[cliente] += totalVenda;
// });

// console.log(totalPorCliente);



// function encontrarVendasPorProduto(nomeProduto) {
//     return vendas.filter(venda =>
//         venda.produtos.some(produto => produto.nome === nomeProduto)
//     );
// }

// const resultado = encontrarVendasPorProduto("Smartphone");
// console.log(resultado);
// console.dir(resultado, { depth: null });


const comprasPorCliente = {};

// Agrupar datas de compra por cliente
vendas.forEach(venda => {
    const cliente = venda.cliente;
    const data = venda.data;

    if (!comprasPorCliente[cliente]) {
        comprasPorCliente[cliente] = [];
    }

    comprasPorCliente[cliente].push(data);
});

// Gerar relatório com primeira e última compra
const relatorioCompras = {};

for (const cliente in comprasPorCliente) {
    const datas = comprasPorCliente[cliente].sort(); // ordena as datas em ordem crescente
    relatorioCompras[cliente] = {
        primeiraCompra: datas[0],
        ultimaCompra: datas[datas.length - 1]
    };
}

console.log(relatorioCompras);