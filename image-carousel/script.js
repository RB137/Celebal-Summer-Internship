const images = document.querySelectorAll('.carousel-image');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;
images[index].classList.add('active');

function showSlide(i) {
  images.forEach(img => img.classList.remove('active'));
  images[i].classList.add('active');
}

prev.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  showSlide(index);
});

next.addEventListener('click', () => {
  index = (index + 1) % images.length;
  showSlide(index);
});
