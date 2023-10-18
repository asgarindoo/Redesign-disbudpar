const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(slideIndex) {
    slides.forEach((slide) => (slide.style.display = 'none'));
    dots.forEach((dot) => dot.classList.remove('active'));
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        currentSlide = index;
    });
});

showSlide(currentSlide);

setInterval(nextSlide, 5000);
