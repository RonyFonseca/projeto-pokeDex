var botaoAlterarTema = document.getElementById("botao-alterar-tema");

var body = document.querySelector("body");

var imagemBotao = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    let modoEscuroAtivo = body.classList.contains("modo-escuro");
    imagemBotao.setAttribute("src", "src/img/sun.png");

    if(modoEscuroAtivo){
        body.classList.remove("modo-escuro");
    }else{
        body.classList.add("modo-escuro");

        imagemBotao.setAttribute("src", "src/img/moon.png");
    }
});