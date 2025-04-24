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


// const reusltado = produtos.filter(produtos => produtos.categoria === "Eletrônicos")   //(observacao é preciso colocar: "" e escrever igual ao item do array)
// const reusltado = produtos.filter(produtos => produtos.preco <= 99)
// const reusltado = produtos.filter(produtos => produtos.estoque <= 14)
// const reusltado = produtos.filter(produtos => produtos.categoria === "Calçados" && produtos.preco >= 101)
const reusltado = produtos.filter(produtos => produtos.nome.includes("Fone"))


console.log(reusltado)