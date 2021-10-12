const mainPage = document.querySelector(".main-page");
const carousel = document.querySelector(".carousel");

const startButton = document.querySelector(".btn-start");
const rightButton = document.querySelector('.btn-right');
const leftButton = document.querySelector('.btn-left');

const slideBar = document.querySelectorAll('.slide-bar span');

const HIDDEN_CLASS = 'hidden';
const GRAY = 'gray';
const TRANSPARENT = 'transparent';

const endIndex = 12;
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
// 시작버튼을 누르면 메인페이지는 사라지고 이미지 슬라이드쇼가 시작된다
function startSlide() {
	mainPage.classList.add(HIDDEN_CLASS);
	carousel.classList.remove(HIDDEN_CLASS);
}
startButton.addEventListener("click", startSlide);

function startSlideShow() {
  if (slideIndex === 0) {
    document.getElementById('images').src = 'img/' + slideImages[slideIndex];
    slideBar[slideIndex].classList.add(GRAY);
  }
}
startSlideShow();
// 오른쪽 버튼 눌렀을 때 사진 오른쪽으로 넘어가기
function slidingRight() {
  if (slideIndex < endIndex) {
    slideIndex++;
    document.getElementById('images').src = 'img/' + slideImages[slideIndex];
  }
  if (slideIndex === endIndex) {
    slideIndex = 0;
    document.getElementById('images').src = 'img/' + slideImages[slideIndex];
  }
  coloringSlideBarRight();
}
rightButton.addEventListener('click', slidingRight);
// 왼쪽 버튼 눌렀을 때 사진 왼쪽으로 넘어가기
function slidingLeft() {
  if (slideIndex >= 0) {
  slideIndex--;
  document.getElementById('images').src = 'img/' + slideImages[slideIndex];
  }
  if (slideIndex < 0) {
  slideIndex = endIndex - 1;
  document.getElementById('images').src = 'img/' + slideImages[slideIndex];
  }

  coloringSlideBarLeft();
}
leftButton.addEventListener('click', slidingLeft);
// 오른쪽으로 사진 넘어갈때 마다 해당 순번의 슬라이드 바에 색상 넣어주기
function coloringSlideBarRight() {
  for (let j = 0; j < endIndex; j++) {
    if (slideIndex < endIndex && slideIndex !== 0) {
    slideBar[slideIndex].classList.add(GRAY);
    slideBar[slideIndex -1].classList.remove(GRAY);
  } else if (slideIndex === 0) {
    slideBar[slideIndex].classList.add(GRAY);
    slideBar[slideBar.length -1].classList.remove(GRAY);
  }
 }
}
// 왼쪽으로 사진 넘어갈때 마다 해당 순번의 슬라이드 바에 색상 넣어주기
function coloringSlideBarLeft() {
  for (let j = 0; j < endIndex; j++) {
    if (slideIndex < endIndex && slideIndex !== 0 && slideIndex !== endIndex - 1) {
    slideBar[slideIndex].classList.add(GRAY);
    slideBar[slideIndex + 1].classList.remove(GRAY);
  } else if (slideIndex === 0 && slideIndex !== endIndex - 1) {
    slideBar[slideIndex].classList.add(GRAY);
    slideBar[slideIndex + 1].classList.remove(GRAY);
  } else if (slideIndex === endIndex - 1) {
    slideBar[0].classList.remove(GRAY);
    slideBar[slideIndex].classList.add(GRAY);
  }
 }
}
// 화살표 버튼 말고 슬라이드 바 눌렀을 때 해당 순번의 이미지 보이게 하기 & 슬라이드 바에 색상 넣어주기
for (let k = 0; k < endIndex; k++) {
  slideBar[k].addEventListener('click', function () {
   const markingSlideBar = document.querySelector('.gray');
    slideIndex = k;
    this.classList.add(GRAY);

    if (markingSlideBar) {
      markingSlideBar.classList.remove(GRAY);
      document.getElementById('images').src = 'img/' + slideImages[slideIndex];
    }
  });
}

