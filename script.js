function mudarTema() {
  document.body.classList.toggle("dark");
}

function exibir(id) {
  const display = document.getElementById(id).style.display;
  if (display === "inline") {
    document.getElementById(id).style.display = "none";
  } else {
    document.getElementById(id).style.display = "inline";
  }
}