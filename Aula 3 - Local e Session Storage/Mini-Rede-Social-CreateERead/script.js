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


// Inicialização
window.onload = function() {
    carregarPostsLocalStorage();
    displayPosts();

    document.getElementById('postForm').addEventListener('submit', addPost);
    document.querySelector("#postList").addEventListener("click", handleClick);

    // localStorage.setItem("nome", "Santos!")
    // console.log(localStorage.getItem("nome"));
    // localStorage.removeItem("nome")
    // localStorage.clear()
};

const handleClick = (infosDoEvento) => {
    const acaoBtn = infosDoEvento.target.dataset.action;
    const indicePost = infosDoEvento.target.dataset.index;
    
    if(!acaoBtn) return;

    if(acaoBtn === "Editar"){
        editarPost(indicePost) 
    }
    else if(acaoBtn === "Apagar"){
        apagarPost(indicePost)
    }
}

// Função para exibir os posts
function displayPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    posts.forEach((pegaPost, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('card-post');
  
            postElement.innerHTML = `
                <p>${pegaPost.text}</p>
                ${pegaPost.image ? `<img src="${pegaPost.image}" alt="Imagem do post" style="max-width:150px;">` : ""}
                <p><em>Categoria: ${pegaPost.category}</em></p>
                <p><em>Data e Hora: ${pegaPost.date}</em></p>
                <button data-action="Editar" data-index=${index}><i class="fa-solid fa-pen-to-square"></i> Editar</button>
                <button data-action="Apagar" data-index=${index}><i class="fa-solid fa-eraser"></i> Apagar</button>
                <hr style="margin:30px;">`;
               
            postList.append(postElement);
        });
}

// Função para adicionar um novo post
function addPost(event) {
    event.preventDefault();
    
    const postText = document.getElementById('postText').value;
    const postCategory = document.getElementById('postCategory').value;
    const postImage = document.getElementById('postImage').value
    const postDate = new Date().toLocaleString(); 

    const post = { 
        text: postText, 
        category: postCategory, 
        image: postImage, 
        date: postDate 
    };
    
    posts.unshift(post);
    salvarLocalStorage();
    
    document.querySelector('#postForm').reset();
    
    displayPosts();
}

//UPDATE
const editarPost = (indicePost) => {
    const novoTexto = prompt("Edite o conteúdo do seu post", posts[indicePost].text)
    posts[indicePost].text = novoTexto
    displayPosts()
}

//DELETE
const apagarPost = (indicePost) => {

    const confirmar = confirm("Deseja realmente excluir esse post?")

    if(confirmar){
        posts.splice(indicePost, 1);
        displayPosts();
    }
}

const salvarLocalStorage = () => {
    localStorage.setItem("posts", JSON.stringify(posts))
}

const carregarPostsLocalStorage = () => {
    postsGuardados = localStorage.getItem("posts")

    if (postsGuardados) {
        posts = JSON.parse(postsGuardados)
    }
}