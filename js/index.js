// import showSlides from './show-slides.js'
// import player from './player.js'
// import showSlides1by1 from './show-slides-1by1.js'

// document.querySelector('#prev').addEventListener('click', plusSlides(-1))

let slideIndex = 1;
showSlides(slideIndex);

document.querySelector('#prev').addEventListener('click', lessSlides)
document.querySelector('#next').addEventListener('click', plusSlides)
document.querySelectorAll('.dot').forEach((item,index) => {
  item.addEventListener('click', showSlides(index))
})

// console.log(`Click al número ${index}`)

function plusSlides(){
  showSlides(slideIndex += 1);
}

function lessSlides(){
  showSlides(slideIndex -= 1);
}

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

// showSlides(slideIndex)
// player()
// showSlides1by1()