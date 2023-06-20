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

const works = document.querySelector('.cardsSection');
const cardOne = document.createElement('div');
works.appendChild(cardOne);
cardOne.innerHTML = `
<h1 class="Elo" > Ellooooooooo </h1>
`;

const projects = [
const card1 = {
    name: "Tonic",
    frame: "./images/Frame 2.png",
    image: "./images/orange.snapshot.png",
    imageForDesk: "./images/card1desk .png",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aut, explicabo aspernatur sint asperiores mollitia quaerat iure deleniti distinctio impedit maxime at harum ab dolorum necessitatibus ipsum quibusdam, saepe odit nihil temporibus. Architecto, assumenda. Provident maxime, delectus iste facilis ducimus ratione accusantium, eum optio dolorum obcaecati, iusto distinctio atque perspiciatis ab dolorem veritatis exercitationem ipsum quisquam. Quaerat, error obcaecati.",
    longDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta assumenda accusamus porro praesentium consequuntur possimus optio provident! Quod quia, quaerat eaque officia quas libero autem facilis explicabo excepturi enim mollitia recusandae, ipsum blanditiis nemo eos porro doloribus doloremque iusto sed, minima aperiam architecto adipisci harum modi? Ipsa quisquam aperiam fuga non dolorum delectus! Incidunt quos dolorum deleniti eum cumque nemo, error reprehenderit facilis, quasi aperiam odio.",
    technologies: ["./images/htmltag.png", "./images/csstag.png", "./images/javascripttag.png"],
    live: "https://www.google.com/",
    source: "https://github.com/",
}

const card2 = {
    name: "Mult-Post Stories",
    frame: "./images/canopydesk2&3.png",
    image: "./images/Beige.snapshot.png",
    imageForDesk: "./images/card2desk.png",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aut, explicabo aspernatur sint asperiores mollitia quaerat iure deleniti distinctio impedit maxime at harum ab dolorum necessitatibus ipsum quibusdam, saepe odit nihil temporibus. Architecto, assumenda. Provident maxime, delectus iste facilis ducimus ratione accusantium, eum optio dolorum obcaecati, iusto distinctio atque perspiciatis ab dolorem veritatis exercitationem ipsum quisquam. Quaerat, error obcaecati.",
    longDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta assumenda accusamus porro praesentium consequuntur possimus optio provident! Quod quia, quaerat eaque officia quas libero autem facilis explicabo excepturi enim mollitia recusandae, ipsum blanditiis nemo eos porro doloribus doloremque iusto sed, minima aperiam architecto adipisci harum modi? Ipsa quisquam aperiam fuga non dolorum delectus! Incidunt quos dolorum deleniti eum cumque nemo, error reprehenderit facilis, quasi aperiam odio.",
    technologies: ["./images/htmltag.png", "./images/rubydesk23&4.png", "./images/csstag.png", "./images/javascripttag.png"],
    live: "https://www.google.com/",
    source: "https://github.com/",
}

const card3 = {
    name: "Facebook 360",
    frame: "./images/canopydesk2&3.png",
    image: "./images/shinyorange.snapshot.png",
    imageForDesk: "./images/card3desk.png",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aut, explicabo aspernatur sint asperiores mollitia quaerat iure deleniti distinctio impedit maxime at harum ab dolorum necessitatibus ipsum quibusdam, saepe odit nihil temporibus. Architecto, assumenda. Provident maxime, delectus iste facilis ducimus ratione accusantium, eum optio dolorum obcaecati, iusto distinctio atque perspiciatis ab dolorem veritatis exercitationem ipsum quisquam. Quaerat, error obcaecati.",
    longDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta assumenda accusamus porro praesentium consequuntur possimus optio provident! Quod quia, quaerat eaque officia quas libero autem facilis explicabo excepturi enim mollitia recusandae, ipsum blanditiis nemo eos porro doloribus doloremque iusto sed, minima aperiam architecto adipisci harum modi? Ipsa quisquam aperiam fuga non dolorum delectus! Incidunt quos dolorum deleniti eum cumque nemo, error reprehenderit facilis, quasi aperiam odio.",
    technologies: ["./images/htmltag.png", "./images/rubydesk23&4.png", "./images/csstag.png", "./images/javascripttag.png"],
    live: "https://www.google.com/",
    source: "https://github.com/",
}

const card4 = {
    name: "Uber Navigation",
    frame: "./images/canopydesk4.png",
    image: "./images/white.snapshot.png",
    imageForDesk: "./images/card4desk.png",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aut, explicabo aspernatur sint asperiores mollitia quaerat iure deleniti distinctio impedit maxime at harum ab dolorum necessitatibus ipsum quibusdam, saepe odit nihil temporibus. Architecto, assumenda. Provident maxime, delectus iste facilis ducimus ratione accusantium, eum optio dolorum obcaecati, iusto distinctio atque perspiciatis ab dolorem veritatis exercitationem ipsum quisquam. Quaerat, error obcaecati.",
    longDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta assumenda accusamus porro praesentium consequuntur possimus optio provident! Quod quia, quaerat eaque officia quas libero autem facilis explicabo excepturi enim mollitia recusandae, ipsum blanditiis nemo eos porro doloribus doloremque iusto sed, minima aperiam architecto adipisci harum modi? Ipsa quisquam aperiam fuga non dolorum delectus! Incidunt quos dolorum deleniti eum cumque nemo, error reprehenderit facilis, quasi aperiam odio.",
    technologies: ["./images/htmltag.png", "./images/rubydesk23&4.png", "./images/csstag.png", "./images/javascripttag.png"],
    live: "https://www.google.com/",
    source: "https://github.com/",
}
];



// const body = document.querySelector('body');
// const section = document.createElement('section');
// body.appendChild(section);
//   section.innerHTML = `
//   <div class="cards">
//   <div>
//       <img class="mobileImage" src="./images/orange.snapshot.png" alt="">
//       <img class="deskImage" src="./images/card1desk .png" alt="">
//   </div>
//   <div class="left-block">
//       <h2 class="titleMobile">POPUP</h2>
//       <h2 class="titleDesk">Tonic</h2>
//       <div><img class="canopyMobile" src="./images/Frame 2.png" alt=""></div>
//       <div><img class="canopyDesk" src="./images/Frame 2.png" alt=""></div>
//       <p class="parrMobile">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
//       <p class="parrDesk">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
//       <ul class="tags">
//           <li><img class="programs" src="./images/htmltag.png" alt=""></li>
//           <li><img class="programs" src="./images/csstag.png" alt=""></li>
//           <li><img class="programs" src="./images/javascripttag.png" alt=""></li>
//       </ul>
//       <div>
//           <button class="popupbutton">See project</button>
//       </div>
//   </div>
//   </div>
// `;


// const open = document.querySelector('.popupbutton');
// open.addEventListener('click', ()=> {
//     const main = document.createElement('div');
//     main.className = 'main';
//     const popup = document.createElement('div');
//     popup.className = 'popup'
//     popup.innerHTML = `
//     <div class="cards">
//                 <div>
//                     <img class="mobileImage" src="./images/orange.snapshot.png" alt="">
//                     <img class="deskImage" src="./images/card1desk .png" alt="">
//                 </div>
//                 <div class="left-block">
//                     <h2 class="titleMobile">POPUP</h2>
//                     <h2 class="titleDesk">Tonic</h2>
//                     <div><img class="canopyMobile" src="./images/Frame 2.png" alt=""></div>
//                     <div><img class="canopyDesk" src="./images/Frame 2.png" alt=""></div>
//                     <p class="parrMobile">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
//                     <p class="parrDesk">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
//                     <ul class="tags">
//                         <li><img class="programs" src="./images/htmltag.png" alt=""></li>
//                         <li><img class="programs" src="./images/csstag.png" alt=""></li>
//                         <li><img class="programs" src="./images/javascripttag.png" alt=""></li>
//                     </ul>
//                     <div>
//                         <button class="close">Close</button>
//                     </div>
//                 </div>
//             </div>
//     `;
//     main.appendChild(popup);
//     body.appendChild(main);

//     const close = document.querySelector('.close');
//     close.addEventListener('click', ()=> {
//       body.removeChild(main);
//     })
// });