let slides = Array.from(document.querySelectorAll('.slider-parent__item'));
let sliderParent = document.getElementById('sliderParent');

function slideForward() {
  let remainingSlides = slides.filter((item) => !item.classList.contains('gone'));

  if (remainingSlides.length > 1) {
    remainingSlides.forEach((slide) => slide.classList.add('move'));
    setTimeout(() => {
      remainingSlides[0].classList.add('gone');
      slides.forEach((slide) => slide.classList.remove('move', 'moveBack'));
    }, 1000);
  } else if (remainingSlides.length === 1) {
    slides.forEach((item) => item.classList.remove('gone', 'move'));
  }
}

function slideBackward() {
  let remainingSlides = slides.filter((item) => item.classList.contains('gone'));
  if (remainingSlides.length > 0) {
    slides.forEach((slide) => slide.classList.add('moveBack'));
    remainingSlides[remainingSlides.length - 1].classList.remove('gone');
    setTimeout(() => {
      slides.forEach((slide) => slide.classList.remove('moveBack'));
    }, 1000);
  }
}
