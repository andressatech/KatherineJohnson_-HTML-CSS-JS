const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotao = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () =>{
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
   
    body.classList.toggle("modo-escuro");
    if (modoEscuroAtivo) {
        imagemBotao.setAttribute("src", "./assets/img/sun.png");
    }else {
        imagemBotao.setAttribute("src", "./assets/img/moon.png");
}
});
