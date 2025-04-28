// const url = 'https://jsonplaceholder.typicode.com/users';

// fetch(url)
//     .then(response => response.json()) // Converte a resposta para JSON
//     .then(users => {
//         users.forEach(user => {
//             console.log(`${user.id}: ${user.name} - ${user.email}`);
//         });
// })


// fetch(url)
//     .then(response => response.json())
//     .then(users => {
//         users.forEach(user => {
//         console.log(`Nome: ${user.name}`);
//         console.log(`Email: ${user.email}`);
//         console.log(`Cidade: ${user.address.city}`);
//         console.log('---------------------------');
//         });
//     })



// function buscarUsuarios(palavraChave) {
//     fetch(url)
//         .then(response => response.json())
//         .then(users => {
//             const filtrados = users.filter(user =>
//                 user.name.toLowerCase().includes(palavraChave.toLowerCase()) ||
//                 user.email.toLowerCase().includes(palavraChave.toLowerCase())
//             );

//             filtrados.forEach(user => {
//                 console.log(`Nome: ${user.name}`);
//                 console.log(`Email: ${user.email}`);
//                 console.log(`Cidade: ${user.address.city}`);
//                 console.log('---------------------');
//             });
//         });
// }

// buscarUsuarios(`kurtis`);



async function fetchPostsAndUsers() {
    const [posts, users] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()),
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    ]);

    const userPosts = users.reduce((acc, user) => {
        acc[user.name] = posts.filter(post => post.userId === user.id).map(post => post.title);
        return acc;
    }, {});

    console.log(userPosts)
}

fetchPostsAndUsers();