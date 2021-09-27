const mainPage = document.querySelector(".main-page");
const carousel = document.querySelector(".carousel");

const startButton = document.querySelector(".btn-start");
const rightButton = document.querySelector('.btn-right');
const leftButton = document.querySelector('.btn-left');

const slideBar = document.querySelectorAll('.slide-bar span');

const HIDDEN_CLASS = "hidden";

let slideIndex = 0;

const slideImages = [
  'cotton_1.JPG',
  'cotton_2.JPG',
  'cotton_3.jpg',
  'cotton_4.PNG',
  'cotton_5.jpg',
  'cotton_6.JPEG',
  'cotton_7.JPG',
  'cotton_8.JPG',
  'cotton_9.JPEG',
  'cotton_10.JPG',
  'cotton_11.JPEG',
  'cotton_12.JPG',
];

function startSlide() {
	mainPage.classList.add(HIDDEN_CLASS);
	carousel.classList.remove(HIDDEN_CLASS);
	console.log('a');
}
startButton.addEventListener("click", startSlide);

function startSlideShow() {
  if (slideIndex === 0) {
    document.getElementById('images').src = 'img/' + slideImages[slideIndex];
    slideBar[slideIndex].style.backgroundColor = 'grey';
  }
}
startSlideShow();

function slidingRight() {
  if (slideIndex < 12) {
    slideIndex++;
    document.getElementById('images').src = 'img/' + slideImages[slideIndex];
  }
  if (slideIndex === 12) {
    slideIndex = 0;
    document.getElementById('images').src = 'img/' + slideImages[slideIndex];
  }
  coloringSlideBarRight();
}
rightButton.addEventListener('click', slidingRight);

function slidingLeft() {
  if (slideIndex >= 0) {
  slideIndex--;
  document.getElementById('images').src = 'img/' + slideImages[slideIndex];
  }
  if (slideIndex < 0) {
  slideIndex = 11;
  document.getElementById('images').src = 'img/' + slideImages[slideIndex];
  }

  coloringSlideBarLeft();
}
leftButton.addEventListener('click', slidingLeft);

function coloringSlideBarRight() {
  for (let j = 0; j < 12; j++) {
    if (slideIndex < 12 && slideIndex !== 0) {
    slideBar[slideIndex].style.backgroundColor = 'grey';
    slideBar[slideIndex -1].style.backgroundColor = 'transparent';
  } else if (slideIndex === 0) {
    slideBar[slideIndex].style.backgroundColor = 'grey';
    slideBar[slideBar.length -1].style.backgroundColor = 'transparent';
  }
 }
}

function coloringSlideBarLeft() {
  for (let j = 0; j < 12; j++) {
    if (slideIndex < 12 && slideIndex !== 0 && slideIndex !== 11) {
    slideBar[slideIndex].style.backgroundColor = 'grey';
    slideBar[slideIndex + 1].style.backgroundColor = 'transparent';
  } else if (slideIndex === 0 && slideIndex !== 11) {
    slideBar[slideIndex].style.backgroundColor = 'grey';
    slideBar[slideIndex + 1].style.backgroundColor = 'transparent';
  } else if (slideIndex === 11) {
    slideBar[0].style.backgroundColor = 'transparent';
    slideBar[slideIndex].style.backgroundColor = 'grey';
  }
 }
  }


