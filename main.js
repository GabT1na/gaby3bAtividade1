//primeira variavel - seleciona o id da tag titulo
let titulo = document.getElementById('titulo');
//segunda variavel - seleciona o id da tag meuBotao
let botao = document.getElementById('meuBotao');
//terceira variavel - seleciona o id da tag conteudo
let conteudo = document.getElementById('conteudo');

//modificar o texto do titulo
titulo.textContent = "titulo modificado";

//adiconar um evento ao botão
botao.addEventListener("click", function(){
    conteudo.textContent = "O botão foi clicado!";
});

//adicona class conteudoClasse
conteudo.classList.add('conteudoClasse');
//adiciona class tituloclasse
titulo.classList.add('tituloClasse');