// This is for the menu

const hamburger = document.querySelector('.hamburger');
const fullMenu = document.querySelector('.fullMenu');

function burgerToClose() {
  hamburger.classList.toggle('active');
  fullMenu.classList.toggle('active');
}

hamburger.addEventListener('click', burgerToClose);

const fullMenuLink = document.querySelectorAll('.fullMenuLink');

function linkCloseTheBlue() {
  hamburger.classList.remove('active');
  fullMenu.classList.remove('active');
}

fullMenuLink.forEach((n) => n.addEventListener('click', linkCloseTheBlue));

const contactSection = document.querySelector('#contact');
const hamburgerBars = document.querySelectorAll('.bar');

function chameleon() {
  const scrollPosition = window.scrollY || window.pageYOffset;
  const contactSectionPosition = contactSection.offsetTop;

  if (scrollPosition >= contactSectionPosition) {
    hamburgerBars.forEach((bar) => {
      bar.style.backgroundColor = 'white';
    });
  } else {
    hamburgerBars.forEach((bar) => {
      bar.style.removeProperty('background-color');
    });
  }
}

window.addEventListener('scroll', chameleon);

// This is for the Pop Up Windows