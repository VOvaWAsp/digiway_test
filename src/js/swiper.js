document.addEventListener('DOMContentLoaded', function() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const sliders = document.querySelectorAll('.swiper-slide');
    const nextBtn = document.querySelector('.swiper-btn-next');
    const prevBtn = document.querySelector('.swiper-btn-prev');
    let slideIndex = 0;

    function showSlide(index) {
        swiperWrapper.style.transform = `translateX(-${index * 100}%)`;
    };

    function nextSlide() {
        slideIndex = (slideIndex + 1) % sliders.length;
        showSlide(slideIndex);
    };

    function prevSlide() {
        slideIndex = (slideIndex - 1 + sliders.length) % sliders.length;
        showSlide(slideIndex);
    };

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    showSlide(slideIndex);
})