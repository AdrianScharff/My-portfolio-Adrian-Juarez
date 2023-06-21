// This is for the menu

// const { setDefaultHighWaterMark } = require("stream");

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

const cardProperties = [
  {
    name: "Tonic",
    reversed: false,
    frame: "./images/Frame 2.png",
    image: "./images/orange.snapshot.png",
    imageForDesk: "./images/card1desk .png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["./images/htmltag.png", "./images/csstag.png", "./images/javascripttag.png"],
    live: "https://www.google.com/",
    source: "https://github.com/",
  },

  {
    name: "Mult-Post Stories",
    reversed: true,
    frame: "./images/canopydesk2&3.png",
    image: "./images/Beige.snapshot.png",
    imageForDesk: "./images/card2desk.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["./images/htmltag.png", "./images/rubydesk23&4.png", "./images/csstag.png", "./images/javascripttag.png"],
    live: "https://www.google.com/",
    source: "https://github.com/",
  },

  {
    name: "Facebook 360",
    reversed: false,
    frame: "./images/canopydesk2&3.png",
    image: "./images/shinyorange.snapshot.png",
    imageForDesk: "./images/card3desk.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["./images/htmltag.png", "./images/rubydesk23&4.png", "./images/csstag.png", "./images/javascripttag.png"],
    live: "https://www.google.com/",
    source: "https://github.com/",
  },

  {
    name: "Uber Navigation",
    reversed: true,
    frame: "./images/canopydesk4.png",
    image: "./images/white.snapshot.png",
    imageForDesk: "./images/card4desk.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["./images/htmltag.png", "./images/rubydesk23&4.png", "./images/csstag.png", "./images/javascripttag.png"],
    live: "https://www.google.com/",
    source: "https://github.com/",
  }
];

// Card templates

const cardsFixed = (properties, identifier) => `<div class="cards${properties.reversed ? ' deskReverse' : ''}">1
  <div>2
  <img class="deskImage" src="${properties.imageForDesk}" alt="${properties.name} Work" />
  </div>2
  <div class="left-block">3
    <h2>${properties.name}</h2>
    <div>4<img class="canopyDesk" src="${properties.frame}" alt=""></div>4
    <p class="parrDesk">${properties.description}</p>
    <ul class="tags">
      ${properties.technologies.map((tag) => `<li><img class="programs" src="${tag}" alt=""></li>`).join('')}
    </ul>
    <div class="popUpFooter">5
    <button class="butt openPopUp" data-content-id="${identifier}">See project</button>
    </div>5
    </div>3
  </div>2
</div>1
`;

// Card templates
const cardsPopUp = (properties) => `
  <div class="popUpCard">1
    <div class="cards">2
      <div class="popUpHeader">3

        <button class="closePopUp"><img id="thisImage" src="./images/close-Button-Popup.png" alt="Close PopUp" />
        </button>

        <h2>${data.title}</h2>

        <div>4
        <img class="canopyDesk" src="${properties.frame}" alt="">
        </div>4
      </div>3

      <img class="deskImage" src="${properties.imageForDesk}" alt='${properties.name} Work" />

    <div class="left-block">5

      <p class="parrDesk">${properties.description}</p>

      <ul class="tags">
      ${properties.technologies.map((tag) => `<li><img class="programs" src="${tag}" alt=""/></li>`).join('')}
      </ul>

      <div class="popUpFooter">6

      <a href="${properties.live}"><button class="butt Live">div>See Live</div><img src="./images/Live-icon-demo.svg" alt=""></button></a>
      <a href="${properties.source}"><button class="butt Source"><div>See Source</div><img src="./images/Source-icon-github.png" alt="">
      </button></a>

      </div>6
      </div>5
    </div>2
  </div>1
  `;

  // Cards Event Listeners and Compononent
  
  const projectsContainer = document.querySelector("#creations");
  const popUpContainer = document.querySelector("#popUpContainer");

  cardProperties.forEach((data, i) => {
    projectsContainer.innerHTML += cardsFixed(data, i);
  });

  const openPopUpButtons = document.querySelectorAll('.openPopUp');

  openPopUpButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

    const popUpId = button.dataset.contentId;
    popUpContainer.innerHTML = cardsPopUp(cardProperties[popUpId]);
    popUpContainer.classList.add('openUp');

    const closePopUpButton = popUpContainer.querySelector('.closePopUp');
    closePopUpButton.addEventListener('click', () => {
      popUpContainer.classList.remove('openUp');
    });
  });
});