import "./style.css";
import loadHome from "./test";
import loadMenu from "./menu";
// import loadContact from "./contact";

// const  image = document.createElement("img");
// image.src = foodImage;
// document.body.appendChild(image);


// limpa o conteudo da div content
function clearContent() {
    document.getElementById("content").textContent = "";
}

//  carrega a apagina inicial
document.addEventListener("DOMContentLoaded", () => {
    loadHome();

})

// limpa o conteúdo atual e carrega a pagina de menu

document.getElementById("menu-btn").addEventListener("click", () => {
    clearContent();
    loadMenu();
});

// limpa o conteúdo atual e carrega a pagina de contato
document.getElementById("contact-btn").addEventListener("click", () => {
    clearContent();
    loadContact();
})

// limpa o conteúdo atual e carrega a pagina inicial
document.getElementById("home-btn").addEventListener("click", () => {
    clearContent();
    loadHome();
})

