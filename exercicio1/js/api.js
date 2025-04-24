function exibirUsuario(usuario) {
    const dadosUsuario = document.getElementById('dadosUsuario');
    dadosUsuario.innerHTML = `
    <p><strong>ID:</strong> ${usuario.id}</p>
    <p><strong>Nome:</strong> ${usuario.nome}</p>
    <p><strong>Email:</strong> ${usuario.email}</p>
    <p><strong>Ativo:</strong> ${usuario.ativo}</p>
    <p><strong>Perfil:</strong> ${usuario.perfil}</p>
    <p><strong>Linguagens Favoritas:</strong> ${usuario.linguagensFavoritas}</p>
    `
}

exibirUsuario(usuario);