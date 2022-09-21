import Swiper from 'swiper/swiper-bundle';

export const heroSwiper = new Swiper('.hero-swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  speed: 3000,
  loop: true,
});
