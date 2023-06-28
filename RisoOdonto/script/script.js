// fechar imagem exibida ao reccaregare pagina
document.getElementById("fechar").addEventListener("click", function() {
    var mensagem = document.getElementById("mensagem");
    mensagem.style.display = "none";
});


// aos
AOS.init({
    durantion:2000,
});


