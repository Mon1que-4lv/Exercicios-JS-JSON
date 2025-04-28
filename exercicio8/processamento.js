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


// function calcularTotalVenda(venda) {
//     return venda.produtos.reduce((total, produto) => {
//         return total + (produto.preco * produto.quantidade);
//     }, 0);
// }

// // Testando para a primeira venda
// console.log(`Total da venda 1: R$ ${calcularTotalVenda(vendas[0])}`);



// function resumoVendas(vendas) {
//     return vendas.map(venda => ({
//         id: venda.id,
//         cliente: venda.cliente,
//         data:venda.data,
//         totalVenda: calcularTotalVenda(venda)
//     }));
// }

// console.log(resumoVendas(vendas))



// function buscaVendasPorCliente(vendas, nomeCliente) {
//     return vendas.filter(venda => venda.cliente.toLowerCase() === nomeCliente.toLowerCase());
// }

// const vendasMaria = resumoVendas(buscaVendasPorCliente(vendas, "Maria"));
// console.log(vendasMaria);



function produtosMaisVendidos(vendas) {
    const mapaProdutos = vendas.reduce((acumulador, venda) => {
        venda.produtos.forEach(produto => {
            const { id, nome, quantidade } = produto;
            if (!acumulador[id]) {
                acumulador[id] = { id, nome, quantidade: 0 };
            }
            acumulador[id].quantidade += quantidade;
        });
        return acumulador;
    }, {});

    return Object.values(mapaProdutos).sort((a, b) => b.quantidade - a.quantidade);
}
    console.log(produtosMaisVendidos(vendas))