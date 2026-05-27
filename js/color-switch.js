const speakerImage = document.querySelector('.left-side .speaker');
const colors = [
  'img/halo-air-red.png',
  'img/halo-air-pink.png',
  'img/halo-air-sage-green.png',
  'img/halo-air-seal.png'
];

let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % colors.length;
  speakerImage.src = colors[currentIndex];
}, 1500);