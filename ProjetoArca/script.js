function toggleMenu() {
  const menu = document.getElementById("menuUsuario");
  menu.classList.toggle("ativo");
}

document.addEventListener("click", function(e) {
  const area = document.querySelector(".usuario-area");

  if (!area.contains(e.target)) {
    document.getElementById("menuUsuario").classList.remove("ativo");
  }
});

