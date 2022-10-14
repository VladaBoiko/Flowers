import { refs } from '../auth/helpers/refs';

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.body.classList.add('show-modal');
  refs.openModalBtn.classList.add('is-active');
}

export function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.body.classList.remove('show-modal');
  refs.openModalBtn.classList.remove('is-active');
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