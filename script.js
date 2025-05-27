window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = '1';
    }, index * 500); // フェードインの順番を調整
  });
});
let slideIndex = 0;
let slides, dots;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active-dot');
    if (i === index) {
      slide.classList.add('active');
      dots[i].classList.add('active-dot');
    }
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

function goToSlide(index) {
  slideIndex = index;
  showSlide(slideIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  slides = document.querySelectorAll('.slide');
  dots = document.querySelectorAll('.dot');
  showSlide(slideIndex);
});
