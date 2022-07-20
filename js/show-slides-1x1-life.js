let slideIndex = 1

document.querySelector('#lifestyle').querySelector('.prev1x1').addEventListener('click', lessSlidesLife)
document.querySelector('#lifestyle').querySelector('.next1x1').addEventListener('click', plusSlidesLife)

function plusSlidesLife() {
  showSlides1x1Life(slideIndex += 1);
}

function lessSlidesLife() {
  showSlides1x1Life(slideIndex -= 1);
}

export default function showSlides1x1Life(n) {
  let i;
  let slides = document.querySelector('#lifestyle').getElementsByClassName("slides1x1");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}