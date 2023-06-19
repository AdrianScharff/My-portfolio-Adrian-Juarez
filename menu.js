// This is for the menu

let hamburger = document.querySelector(".hamburger");
let fullMenu = document.querySelector(".fullMenu");

function burgerToClose () {
  hamburger.classList.toggle("active");
  fullMenu.classList.toggle("active");
}

hamburger.addEventListener("click", burgerToClose);

let fullMenuLink = document.querySelectorAll(".fullMenuLink");

function linkCloseTheBlue() {
  hamburger.classList.remove("active");
  fullMenu.classList.remove("active");
}

fullMenuLink.forEach(n => n.addEventListener("click", linkCloseTheBlue));

// insertar cambio 2 aqui debajo y borrar comentario

// insertar cambio 3 aqui debajo y borrar comentario


// This is for the Pop Up Windows

