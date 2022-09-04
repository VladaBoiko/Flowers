const refs = {
  openModalBtn: document.querySelector("[data-hero-modal-open]"),
  closeModalBtn: document.querySelector("[data-hero-modal-close]"),
  modal: document.querySelector('.hero-modal'),
  backdrop: document.querySelector('.js-hero-backdrop'),
  body: document.querySelector("body"),
}


refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.body.classList.add('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.body.classList.remove('show-modal');
  refs.body.classList.remove('show-modal');
}

function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    onCloseModal();
  }
}

function onEscKeyPress(evt) {
  if (evt.code === 'Escape') {
    onCloseModal();
  }
}