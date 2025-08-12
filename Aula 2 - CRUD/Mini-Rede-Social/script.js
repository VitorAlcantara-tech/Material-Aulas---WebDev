// const pessoa = [{
//     name: "Vitor",
//     age: 20,
//     city: "São Paulo"
// }
// ]

// console.log(pessoa.city);
// console.log(pessoa[city]);


// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];

window.onload = function (){
    mostrarPosts()

    document.querySelector("#postForm").addEventListener("submit", criarPost)
}
//Create (CRUD)

const criarPost = (e) => {
    e.preventDefault();

    const textPost = document.querySelector("#postText").value;
    const categoryPost = document.querySelector("#postCategory").value;
    const imagePost = document.querySelector("#postImage").value;
    const datePost = new Date().toLocaleString(); // Pega a hora atual e segue o formato de data da máquina
    
    //Cria um novo objeto de Post
    const post = {
        text: textPost,
        category: categoryPost,
        image: imagePost,
        date: datePost
    }

    posts.unshift(post)// unshift adiciona no primeiro lugar do array

    mostrarPosts();
}


//Read
function mostrarPosts () {
    const listaPosts = document.querySelector("#postList");
    listaPosts.innerHTML = '';

    posts.forEach(pegaItem => {
        const cardPost = document.createElement("div");
        cardPost.classList.add("card")

        cardPost.innerHTML = `
        <p>${pegaItem.text}</p>
        <img src="${pegaItem.image}" style="max-width: 150px, border-radiu:15px"/>
        <p>${pegaItem.category}</p>
        <p>${pegaItem.date}</p>
        <button>Editar</button>
        <button>Apagar</button>
        `
        listaPosts.append(cardPost)
    })

    
}
//Update
//Delete

