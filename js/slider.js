const mainImg = document.querySelector('.main-product-img');
const leftBtn = document.querySelector('.arrow-btn-left');
const rightBtn = document.querySelector('.arrow-btn-right');

const images = [
  'img/halo-air-pink.png',
  'img/halo-air-seal.png',
  'img/halo-air-sage-green.png',
  'img/halo-air-red.png'
];

let positionCounter = 0;

rightBtn.addEventListener('click', () => {
  positionCounter++; 
  if (positionCounter > 3) {
    positionCounter = 0; 
  }
  mainImg.src = images[positionCounter];
});

leftBtn.addEventListener('click', () => {
  positionCounter--;
  if (positionCounter < 0) {
    positionCounter = 3; 
  }
  mainImg.src = images[positionCounter]; 
});
