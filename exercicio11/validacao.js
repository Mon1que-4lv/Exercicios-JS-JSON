
// const produtosJSON = `[
//     {
//         "id": 1,
//         "nome": "Camiseta",
//         "preco": 29.90,
//         "categoria": "Roupas"
//     },
//     {
//         "id": 2,
//         "nome": "Calça",
//         "preco": 59.90
//     },
//     {
//         "id": 3,
//         "nome": "Tênis",
//         "preco": 120.00,
//         "categoria": "Calçados"
//     }
// ]`;


// function validarProduto(produto) {
//     // Verifica se todos os campos obrigatórios existem
//     const camposObrigatorios = ['id', 'nome', 'preco', 'categoria'];
//     return camposObrigatorios.every(campo => produto.hasOwnProperty(campo));
//     // hasOwnProperty verificar se um objeto possui uma propriedade específica diretamente nele
// } 

// const produtos = JSON.parse(produtosJSON);

// produtos.forEach((produto, index) => {
//     if (validarProduto(produto)){
//         console.log(`produto ${index + 1}: Válido`);
//     } else {
//         console.log(`produto ${index +1}: Inválido - Campos ausentes`);
//     }
// });



// function validarProduto(produto) {
//     const camposObrigatorios = ['id', 'nome', 'preco', 'categoria'];

//     // Verifica existência e tipo de cada campo
//     return camposObrigatorios.every(campo => {
//         if (!produto.hasOwnProperty(campo)) return false;
        
//         const valor = produto[campo];

//         if (valor === null || valor === undefined || valor === '') return false;


//         switch (campo) {
//             case 'id':
//             case 'preco':
//                 return typeof valor === 'number' && !isNaN(valor);
//             case 'nome':
//             case 'categoria':
//                 return typeof valor === 'string';
//             default:
//                 return true;
//         }
//     });
// }

// const produtos = JSON.parse(produtosJSON);

// produtos.forEach((produto, index) => {
//     if (validarProduto(produto)) {
//         console.log(`Produto ${index + 1}: Válido`);
//     } else {
//         console.log(`Produto ${index + 1}: Inválido - Campos ausentes ou tipos incorretos`);
//     }
// });



const venda = {
    cliente: {
        nome: "Monique lima",
        email: "monique.lima@example.com"
    },
    data: "2025-04-28T10:00:00Z",
    produtos: [
        {
            id: 1,
            nome: "Camiseta",
            preco: 29.90,
            quantidade: 2
        },
        {
            id: 2,
            nome: "Calça",
            preco: 59.90,
            quantidade: 1
        }
    ]
};

const resultado = validarVenda(venda);
if (resultado) {
    console.log("Venda válida!");
} else {
    console.log("Venda inválida.");
}

function validarVenda(venda) {
    // Validar o campo cliente
    if (!venda.hasOwnProperty('cliente') || typeof venda.cliente !== 'object') {
        return false;
    }
    if (!venda.cliente.hasOwnProperty('nome') || typeof venda.cliente.nome !== 'string' || venda.cliente.nome.trim() === '') {
        return false;
    }
    if (!venda.cliente.hasOwnProperty('email') || typeof venda.cliente.email !== 'string' || !/\S+@\S+\.\S+/.test(venda.cliente.email)) {
        return false;
    }

    // Validar o campo data
    if (!venda.hasOwnProperty('data') || isNaN(new Date(venda.data))) {
        return false;
    }

    // Validar o campo produtos
    if (!venda.hasOwnProperty('produtos') || !Array.isArray(venda.produtos) || venda.produtos.length === 0) {
        return false;
    }

    // Validar cada produto
    return venda.produtos.every(produto => {
        if (!produto.hasOwnProperty('id') || typeof produto.id !== 'number') {
            return false;
        }
        if (!produto.hasOwnProperty('nome') || typeof produto.nome !== 'string' || produto.nome.trim() === '') {
            return false;
        }
        if (!produto.hasOwnProperty('preco') || typeof produto.preco !== 'number' || produto.preco <= 0) {
            return false;
        }
        if (!produto.hasOwnProperty('quantidade') || typeof produto.quantidade !== 'number' || produto.quantidade <= 0) {
            return false;
        }
        return true;
    });
}
