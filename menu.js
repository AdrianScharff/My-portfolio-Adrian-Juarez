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

let contactSection = document.querySelector("#contact");
let hamburgerBars = document.querySelectorAll(".bar")

function chameleon () {
  let scrollPosition = window.scrollY || window.pageYOffset;
  let contactSectionPosition = contactSection.offsetTop;

  if (scrollPosition >= contactSectionPosition) {
    hamburgerBars.forEach(function(bar) {
    bar.style.backgroundColor = "white"
    });
  } else {
    hamburgerBars.forEach(function(bar) {
    bar.style.removeProperty('background-color');
    })
  }
}

window.addEventListener("scroll", chameleon);

  

// This is for the Pop Up Windows

