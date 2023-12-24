// FAQ 
const buttons = document.querySelectorAll('.faq__button');
const arrows = document.querySelectorAll('.faq__arrow');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const header = document.querySelector('.header');
const firstSection = document.querySelector('.first');
const firstLeft = document.querySelector('.first__left');
const body = document.body
const html = document.html


buttons.forEach(button => {
  button.addEventListener('click', unfold);
});

arrows.forEach(arrow => {
  arrow.addEventListener('click', unfold);
});

function unfold() {
 
  const buttonOrArrow = this;
  const container = buttonOrArrow.closest('.faq__container');
  const text = container.querySelector('.faq__text');
  text.style.display = (text.style.display === 'none' || text.style.display === '') ? 'block' : 'none';
  rotateArrow()
}
/// FAQ

/// Right Hamburger Menu
const rightHamburger = document.querySelector ('.right-hamburger')
const headerHamburger = document.querySelector ('.header__hamburger')
const insideHamburgerButton = document.querySelector ('.right-hamburger__button')

insideHamburgerButton.addEventListener ('click', activateInsideHamburger)

function activateInsideHamburger () {
  const insideMenu = this.nextElementSibling
  insideMenu.style.display =  (insideMenu.style.display === 'none') ? 'block' : 'none';
  
}

headerHamburger.addEventListener ('click', activateHamburger)

function activateHamburger() {
  rightHamburger.style.display = (rightHamburger.style.display === 'none') ? 'block' : 'none';
  footer.style.display = (rightHamburger.style.display === 'block') ? 'none' : 'block';
  main.style.display = (rightHamburger.style.display === 'block') ? 'none' : 'block';
}

/// Right Hamburger Menu

/// Left Hamburger
const headerHamburgerLeft = document.querySelector ('.header__hamburger-left')
const hamburgerClose = document.querySelector ('.hamburger__close')
const hamburgerContainer = document.querySelector ('.header__hamburger-container')

headerHamburgerLeft.addEventListener ('click', activateLeftHamburger)


function activateLeftHamburger() {
  hamburgerContainer.style.boxShadow ='1px 1px 80px grey'
  
  hamburgerContainer.style.display = (hamburgerContainer.style.display === 'none') ? 'block' : 'none';
  body.style.overflow = (hamburgerContainer.style.display === 'block') ? 'hidden' : 'auto';

  if (hamburgerContainer.style.display === 'block') {
   
    firstSection.style.opacity = '0.5'
  }
  firstSection.addEventListener('click', closeLeftHamburger)
  hamburgerClose.addEventListener ('click', closeLeftHamburger)
}
function closeLeftHamburger () {
  hamburgerContainer.style.display = 'none'
  body.style.overflow = 'auto'
  firstSection.style.opacity = '1'
}
/// Left Hamburger Menu

/// Change people using set interval

let peopleItem = document.querySelectorAll('.first__item');
let firstContainer = document.querySelector('.first__container');

setInterval(() => {
  let shuffledPeople = Array.from(peopleItem).sort(() => Math.random() - 0.5);
  shuffledPeople.forEach(item => {
  firstContainer.appendChild(item);
});

}, 5000);
/// Change people using set interval

/// Add Video
const videoItem = document.querySelectorAll('.hamburger__top-link');
const videoClose = document.querySelector('.video-close');
let videoContainer = document.querySelector('.video-container');

videoItem.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    videoContainer.style.display = 'block'
    header.style.opacity = '0.5'
    firstLeft.style.opacity = '0'


  });
});

videoClose.addEventListener('click', closeIt)
function closeIt() {
  videoContainer.style.display = (videoContainer.style.display === 'none') ? 'block' : 'none';
  if (videoContainer.style.display === 'none') {
    header.style.opacity = '1'
    firstLeft.style.opacity = '1'
  }

}
/// Add Video