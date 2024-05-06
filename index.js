// Quando o usuário rolar 20px da parte superior da página, mostrar ou esconder o botão com suavização
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").classList.add("show"); // Adicionar a classe "show"
  } else {
    document.getElementById("topBtn").classList.remove("show"); // Remover a classe "show"
  }
}

// Quando o usuário clicar no botão, retornar ao topo da página
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
