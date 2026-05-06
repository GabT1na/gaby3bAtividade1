let titulo = document.getElementById('titulo');
let botao = document.getElementById('meuBotao');
let conteudo = document.getElementById('conteudo');

//modificar o texto do titulo
titulo.textContent = "titulo modificado";

//adiconar um evento ao botão
botao.addEventListener("click", function(){
    conteudo.textContent = "O botão foi clicado!";
});

conteudo.classList.add('conteudoClasse');
titulo.classList.add('tituloClasse');