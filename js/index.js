import showSlides from './show-slides.js'
import player from './player.js'
// import showSlides1x1 from './show-slides-1x1.js'

showSlides();
player()
// showSlides1x1()

let prevAnchor = document.querySelector('.slides1x1-container').querySelector('.prev1x1');
let nextAnchor = document.querySelector('.slides1x1-container').querySelector('.next1x1');
let product = document.getElementsByClassName('slides1x1')
let product_page = Math.ceil(product.length / 4);
let l = 0;
let widthSlides1x1 = document.querySelector('.slides1x1').offsetWidth;
let gapWidth = 36
let moveDir = widthSlides1x1 + gapWidth
let maxWidthSlides1x1 = document.querySelector('.slides1x1-container').offsetWidth;

// mobile_view
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
  moveDir = 50.36;
  maxWidthSlides1x1 = 504;
}

let right_mover = () => {
  l = l + moveDir;
  if (product == 1) { l = 0; }
  for (const i of product) {
    if (l > maxWidthSlides1x1) { l = l - moveDir; }
    i.style.left = '-' + l + 'px';
  }

}
let left_mover = () => {
  l = l - moveDir;
  if (l <= 0) { l = 0; }
  for (const i of product) {
    if (product_page > 1) {
      i.style.left = '-' + l + 'px';
    }
  }
}

nextAnchor.addEventListener('click', () => { right_mover(); })
prevAnchor.addEventListener('click', () => { left_mover(); })