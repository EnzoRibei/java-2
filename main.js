// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
document.addEventListener("DOMContentLoaded", function() {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerText = "Olá, esta é uma mensagem gerada por JavaScript!";
});
