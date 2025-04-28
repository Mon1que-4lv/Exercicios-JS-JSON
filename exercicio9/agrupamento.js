const vendas = [
    { "id": 1, "data": "2023-01-10", "cliente": "Maria", "produtos": [
        { "id": 101, "nome": "Smartphone", "preco": 1200, "quantidade": 1, "categoria": "Eletronico" },
        { "id": 102, "nome": "Carregador", "preco": 80, "quantidade": 2, "categoria": "Acessórios"}
    ]},
    { "id": 2, "data": "2023-01-15", "cliente": "João", "produtos": [
        { "id": 103, "nome": "Notebook", "preco": 3500, "quantidade": 1, "categoria": "Informatica" }
    ]},
    { "id": 3, "data": "2023-01-20", "cliente": "Pedro", "produtos": [
        { "id": 101, "nome": "Smartphone", "preco": 1200, "quantidade": 1, "categoria": "Eletronico" },
        { "id": 104, "nome": "Capa Protetora", "preco": 50, "quantidade": 1, "categoria": "Acessórios" },
        { "id": 105, "nome": "Fone Bluetooth", "preco": 180, "quantidade": 1, "categoria": "Acessórios" }
    ]},
    { "id": 4, "data": "2023-02-05", "cliente": "Ana", "produtos": [
        { "id": 106, "nome": "Tablet", "preco": 900, "quantidade": 1, "categoria": "eletronico"},
        { "id": 107, "nome": "Teclado Bluetooth", "preco": 200, "quantidade": 1, "categoria": "Acessórios" },
        { "id": 108, "nome": "Mouse sem fio", "preco": 120, "quantidade": 1, "categoria": "Acessórios" }
    ]},
    { "id": 5, "data": "2023-02-10", "cliente": "Maria", "produtos": [
        { "id": 109, "nome": "Monitor", "preco": 800, "quantidade": 1, "categoria": "Eletronico"}
    ]}
];


// const vendasAgrupadas = vendas.reduce((acc, venda) => {
//     if (!acc[venda.cliente]) {
//         acc[venda.cliente] = [];
//     }
//     // Adicionando a venda ao cliente correspondente
//     acc[venda.cliente].push(venda);
//     return acc;
// }, {});

// console.log(vendasAgrupadas);



// // Função para extrair o mês e ano da data
// const getMesAno = (data) => {
//     const [ano, mes] = data.split("-"); // "2023-01-10" -> ["2023", "01"]
//     return `${ano}-${mes}`;
// };

// // Calculando o total vendido por mês
// const totalVendidoPorMes = vendas.reduce((acc, venda) => {
//     const mesAno = getMesAno(venda.data); // Obtém o mês e ano (ex: "2023-01")

//     // Calculando o total de cada venda
//     const totalVenda = venda.produtos.reduce((total, produto) => {
//         return total + produto.preco * produto.quantidade;
//     }, 0);

//     // Acumulando o total por mês
//     if (!acc[mesAno]) {
//         acc[mesAno] = 0;
//     }
//     acc[mesAno] += totalVenda;

//     return acc;
// }, {});

// console.log(totalVendidoPorMes);



const produtosAgrupadosPorCategoria = vendas.reduce((acc, venda) => {
    venda.produtos.forEach(produto => {
        if (!acc[produto.categoria]) {
            acc[produto.categoria] = [];
        }
        
        acc[produto.categoria].push(produto);
    });
    return acc;
}, {});

console.log(produtosAgrupadosPorCategoria);

