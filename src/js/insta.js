import Swiper from 'swiper/swiper-bundle';

export const instagramSwiper = new Swiper('.insta-swiper-container', {
    spaceBetween: 20,
    slidesPerView: 'auto',
    watchOverflow: false,
})

// preventTouchMove();
// function preventTouchMove() {
//     if (window.innerWidth >= 1340) {
//         instagramSwiper.allowTouchMove = false;
//     }
// }

