import Swiper from 'swiper/swiper-bundle';
export const reviewsSwiper = new Swiper('.revies-swiper__container', {
  navigation: {
    nextEl: '.swiper-btn__next',
    prevEl: '.swiper-btn__prev',
  },

  keyboard: {
    enabled: true,
    onlyOnViewport: true,
    padeUpDown: true,
  },

  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 800,

  breakpoints: {
    370: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: 3,
    },
  },
});
