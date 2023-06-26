// This is for the menu

const hamburger = document.querySelector('.hamburger');
const fullMenu = document.querySelector('.fullMenu');
const fullMenuLink = document.querySelectorAll('.fullMenuLink');
const contactSection = document.querySelector('#contact');
const hamburgerBars = document.querySelectorAll('.bar');

function burgerToClose() {
  fullMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
}

hamburger.addEventListener('click', burgerToClose);

fullMenuLink.forEach((n) => n.addEventListener('click', burgerToClose));

// menu button change color when scrolling over contact section
function chameleon() {
  const scrollPosition = window.scrollY || window.pageYOffset;
  const contactSectionPosition = contactSection.offsetTop;

  if (scrollPosition >= contactSectionPosition) {
    hamburgerBars.forEach((bar) => {
      bar.style.backgroundColor = 'black';
    });
  } else {
    hamburgerBars.forEach((bar) => {
      bar.style.removeProperty('background-color');
    });
  }
}

window.addEventListener('scroll', chameleon);

// This is for the Pop Up Windows