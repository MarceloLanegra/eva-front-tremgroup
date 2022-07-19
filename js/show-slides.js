let slideIndex = 1

document.querySelector('#prev').addEventListener('click', lessSlides)
document.querySelector('#next').addEventListener('click', plusSlides)
document.querySelectorAll('.dot').forEach((item, index) => {
  item.addEventListener('click', currentSlide=>{
    let slideInd = index + 1
    showSlides(slideIndex = slideInd)
  })
})

function plusSlides() {
  showSlides(slideIndex += 1);
}

function lessSlides() {
  showSlides(slideIndex -= 1);
}

export default function showSlides(n) {
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