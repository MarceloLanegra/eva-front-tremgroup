let slideIndex = 1

document.querySelector('#testimonials').querySelector('.prev1x1').addEventListener('click', lessSlidesTest)
document.querySelector('#testimonials').querySelector('.next1x1').addEventListener('click', plusSlidesTest)

function plusSlidesTest() {
  showSlides1x1Test(slideIndex += 1);
}

function lessSlidesTest() {
  showSlides1x1Test(slideIndex -= 1);
}

export default function showSlides1x1Test(n) {
  let i;
  let slides = document.querySelector('#testimonials').getElementsByClassName("slides1x1");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}