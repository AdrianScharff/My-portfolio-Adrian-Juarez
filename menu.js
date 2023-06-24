// This is for the menu

const hamburger = document.querySelector('.hamburger');
const fullMenu = document.querySelector('.fullMenu');
const fullMenuLink = document.querySelectorAll('.fullMenuLink');
const contactSection = document.querySelector('#contact');
const hamburgerBars = document.querySelectorAll('.bar');

function burgerToClose() {
  hamburger.classList.toggle('active');
  fullMenu.classList.toggle('active');
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

const popUpContainer = document.querySelector('.popUpContainer');

const cardsData = [
  {
    Name: 'Tonic',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    LongDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    LongDescriptionDesk: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br><br>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    Image: './images/card1desk.png',
    Features: './images/canopydesk1.png',
    Technologies: ['./images/htmltag.png', './images/csstag.png', './images/javascripttag.png', './images/rubytag.png'],
    SeeProject: 'See project',
    Live: 'https://www.google.com',
    Source: 'https://github.com',
    CloseButton: './images/closePopUpIcon.png',
  },
  {
    Name: 'Multi-Post-Stories',
    Description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    LongDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    LongDescriptionDesk: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br><br>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    Image: './images/card2desk.png',
    Features: './images/canopydesk2&3.png',
    Technologies: ['./images/htmltag.png', './images/csstag.png', './images/javascripttag.png', './images/rubytag.png'],
    SeeProject: 'See project',
    Live: 'https://www.google.com',
    Source: 'https://github.com',
    CloseButton: './images/closePopUpIcon.png',
  },
  {
    Name: 'Facebook 360',
    Description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    LongDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    LongDescriptionDesk: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br><br>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    Image: './images/card3desk.png',
    Features: './images/canopydesk2&3.png',
    Technologies: ['./images/htmltag.png', './images/csstag.png', './images/javascripttag.png', './images/rubytag.png'],
    SeeProject: 'See project',
    Live: 'https://www.google.com',
    Source: 'https://github.com',
    CloseButton: './images/closePopUpIcon.png',
  },
  {
    Name: 'Uber Navigation',
    Description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    LongDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    LongDescriptionDesk: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br><br>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    Image: './images/card4desk.png',
    Features: './images/canopydesk4.png',
    Technologies: ['./images/htmltag.png', './images/csstag.png', './images/javascripttag.png', './images/rubytag.png'],
    SeeProject: 'See project',
    Live: 'https://www.google.com',
    Source: 'https://github.com',
    CloseButton: './images/closePopUpIcon.png',
  },
];

// Cards Template
function generatePopUpTags(technologies) {
  return technologies
    .map((technology, index) => `<li><img class="programs pro${index}" src="${technology}"></li>`)
    .join('');
}

function generatePopUpCard(card) {
  const popUpCard = document.createElement('div');
  popUpCard.classList.add('popUpCard');

  popUpCard.innerHTML = `<div class="popUpContent">
     <div class="topPopUp">
       <h2 class="popEichTwo">${card.Name}</h2>
       <img class="popUpClose" src="${card.CloseButton}" alt="">
     </div>
    <div><img class="canopy" src="${card.Features}" alt=""></div>
    <div class="orange">
      <img class="mobileImage" src="${card.Image}" alt="">
      <img class="deskImage" src="${card.Image}" alt="">
    </div>
    <div class="popFooterDesk">
    <p class="popParMobile">${card.LongDescription}</p>
    <p class="popParDesk">${card.LongDescriptionDesk}</p>
    <div class="popFooterDeskRight">
    <ul class="popUpTags">
        ${generatePopUpTags(card.Technologies)}
    </ul>
    <img class="popSeparator" src="./images/sepPopUpFooter.png" alt="">
       <div class="footerButtonsContainer">
        <a class="popUpLink" href="${card.Live}" target="_blank"><button class="footerButtons">See Live</button></a>
        <a class="popUpLink" href="${card.Source}" target="_blank"><button class="footerButtons">See Source</button></a>
      </div>
      </div>
    </div>
  </div>`;

  const popUpCloseButton = popUpCard.querySelector('.popUpClose');
  popUpCloseButton.addEventListener('click', () => {
    popUpContainer.classList.toggle('active');
  });

  return popUpCard;
}

cardsData.forEach((card, index) => {
  const cardsNormal = `<div class="cards thecard${index + 1}" >
<div class="orange">
    <img class="mobileImage" src="${card.Image}" alt="">
    <img class="deskImage" src="${card.Image}" alt="">
</div>
<div class="left-block">
    <h2 id="h2card${index + 1}">${card.Name}</h2>
    <div><img class="canopy can${index + 1}" src="${card.Features}" alt=""></div>
    <p>${card.Description}</p>
    <ul class="tags">
        <li><img class="programs" src="${card.Technologies[0]}"></li>
        <li><img class="programs" src="${card.Technologies[1]}" alt=""></li>
        <li><img class="programs" src="${card.Technologies[2]}" alt=""></li>
    </ul>
    <div>
        <button class="butt" data-card-index="${index}">${card.SeeProject}</button>
    </div>
</div>
</div>`;

  const works = document.querySelector('.works');
  const tempContainer = document.createElement('div');
  tempContainer.innerHTML = cardsNormal;
  const cardsNormalPage = tempContainer.firstChild;
  works.appendChild(cardsNormalPage);

  const button = cardsNormalPage.querySelector('.butt');
  button.addEventListener('click', () => {
    const { cardIndex } = button.dataset;
    const popUpCard = generatePopUpCard(cardsData[cardIndex]);
    popUpContainer.appendChild(popUpCard);
    popUpContainer.classList.toggle('active');
  });
});
