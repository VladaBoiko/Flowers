export const heroModal = heroSwiper => {
  const refs = {
    openModalBtn: document.querySelector('[data-hero-modal-open]'),
    closeModalBtn: document.querySelector('[data-hero-modal-close]'),
    backdrop: document.querySelector('.js-hero-backdrop'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', onOpenModal);
  refs.closeModalBtn.addEventListener('click', onCloseModal);
  refs.backdrop.addEventListener('click', onBackdropClick);

  function onOpenModal() {
    window.addEventListener('keydown', onEscKeyPress);
    refs.body.classList.add('show-modal');
    refs.openModalBtn.classList.add('is-active');
    heroSwiper.autoplay.stop();
  }

  function onCloseModal() {
    window.removeEventListener('keydown', onEscKeyPress);
    refs.body.classList.remove('show-modal');
    refs.openModalBtn.classList.remove('is-active');
    heroSwiper.autoplay.start();
  }

  function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
      onCloseModal();
    }
  }

  function onEscKeyPress(evt) {
    if (evt.code === 'Escape') {
      onCloseModal();
      refs.openModalBtn.blur();
    }
  }
};
