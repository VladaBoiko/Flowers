import Swiper from 'swiper/swiper-bundle';

export const instagramSwiper = new Swiper('.insta-swiper-container', {
    spaceBetween: 20,
    slidesPerView: 'auto',
    breakpoints: {
        1340: {
            slidesPerView: 4,
        },
    },
});


