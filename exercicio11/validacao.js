function validarProduto(produto) {
    // Verifica se todos os campos obrigatórios existem
    const camposObrigatorios = ['id', 'nome', 'preco', 'categoria'];
    const camposFaltantes = camposObrigatorios.filter(campo => !(campo in produto));
    
    if (camposFaltantes.length > 0) {
        return {
            valido: false,
            erros: `Campos obrigatórios faltando: ${camposFaltantes.join(', ')}`
        };
    }
    
    // Aqui você pode adicionar mais validações (tipo, valor, etc)
    
    return { valido: true };
}

// Teste com um produto válido e outro inválido
const produtoValido = { id: 1, nome: "Teclado", preco: 100, categoria: "Periféricos" };
const produtoInvalido = { id: 2, nome: "Mouse", categoria: "Periféricos" };

console.log(validarProduto(produtoValido));
console.log(validarProduto(produtoInvalido));




