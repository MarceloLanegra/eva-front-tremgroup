import showSlides from './show-slides.js'
import player from './player.js'
import showSlides1x1Life from './show-slides-1x1-life.js'
import showSlides1x1Test from './show-slides-1x1-test.js'





showSlides();                                                                                          
player()
showSlides1x1Life()
showSlides1x1Test()


let prevAnchorDisc = document.querySelector('#discover').querySelector('.slides1x1-container').querySelector('.prev1x1');
let nextAnchorDisc = document.querySelector('#discover').querySelector('.slides1x1-container').querySelector('.next1x1');

  let slidesDisc = document.querySelector(`#discover`).getElementsByClassName('slides1x1')
  let slidesDisc_page = Math.ceil(slidesDisc.length / 4);
  let l = 0;
  let widthSlidesDisc1x1 = document.querySelector(`#discover`).querySelector('.slides1x1').offsetWidth;
  let gapWidth = 36
  let moveDirDisc = widthSlidesDisc1x1 + gapWidth
  let maxWidthSlidesDisc1x1 = document.querySelector(`#discover`).querySelector('.slides1x1-container').offsetWidth;
  
  // mobile_view
  let mob_view = window.matchMedia("(max-width: 768px)");
  if (mob_view.matches) {
    moveDirDisc = 50.36;
    maxWidthSlidesDisc1x1 = 504;
  }
  
  let right_moverDisc = () => {
    l = l + moveDirDisc;
    if (slidesDisc == 1) { l = 0; }
    for (const i of slidesDisc) {
      if (l > maxWidthSlidesDisc1x1) { l = l - moveDirDisc; }
      i.style.left = '-' + l + 'px';
    }
  }

  let left_moverDisc = () => {
    l = l - moveDirDisc;
    if (l <= 0) { l = 0; }
    for (const i of slidesDisc) {
      if (slidesDisc_page > 1) {
        i.style.left = '-' + l + 'px';
      }
    }
  }

nextAnchorDisc.addEventListener('click', () => { right_moverDisc(); })
prevAnchorDisc.addEventListener('click', () => { left_moverDisc(); })

let prevAnchorCon = document.querySelector('#condos').querySelector('.slides1x1-container').querySelector('.prev1x1');
let nextAnchorCon = document.querySelector('#condos').querySelector('.slides1x1-container').querySelector('.next1x1');

let slidesCondos = document.querySelector(`#condos`).getElementsByClassName('slides1x1')
  let slidesCondos_page = Math.ceil(slidesCondos.length / 4);

  let widthSlidesCondos1x1 = document.querySelector(`#condos`).querySelector('.slides1x1').offsetWidth;

  let moveDirCondos = widthSlidesCondos1x1 + gapWidth
  let maxWidthSlidesCondos1x1 = document.querySelector(`#condos`).querySelector('.slides1x1-container').offsetWidth;
  

  if (mob_view.matches) {
    moveDirCondos = 50.36;
    maxWidthSlidesCondos1x1 = 504;
  }
  
  let right_moverCondos = () => {
    l = l + moveDirCondos;
    if (slidesCondos == 1) { l = 0; }
    for (const i of slidesCondos) {
      if (l > maxWidthSlidesCondos1x1) { l = l - moveDirCondos; }
      i.style.left = '-' + l + 'px';
    }
  }

  let left_moverCondos = () => {
    l = l - moveDirCondos;
    if (l <= 0) { l = 0; }
    for (const i of slidesCondos) {
      if (slidesCondos_page > 1) {
        i.style.left = '-' + l + 'px';
      }
    }
  }

nextAnchorCon.addEventListener('click', () => { right_moverCondos(); })
prevAnchorCon.addEventListener('click', () => { left_moverCondos(); })
