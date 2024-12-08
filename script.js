let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');
const thumbnails = document.querySelectorAll('.carousel-thumbnail img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        if (i === index) {
            thumbnails[0].src = slides[(index + 1) % slides.length].querySelector('img').src;
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);