let slide2Index = 1;
showSlides2(slide2Index);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slide2Index += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slide2Index = n);
}

export default function showSlides2(n) {
  let i2;
  let slides2 = document.getElementsByClassName("slides2");
  // let dots = document.getElementsByClassName("dot");
  if (n > slides2.length) {slide2Index = 1}
  if (n < 1) {slide2Index = slides2.length}
  for (i2 = 0; i2 < slides2.length; i2++) {
    slides2[i2].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides2[slide2Index-1].style.display = "block";
  // dots[slide2Index-1].className += " active";
}