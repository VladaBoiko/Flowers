import { refs } from '../auth/helpers/refs';
import { inputPwdHandlers, hidePwd} from './show-pwd';

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

export function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.body.classList.add('show-modal');
  refs.openModalBtn.classList.add('is-active');
  hidePwd(inputPwdHandlers.logPwdBtn, inputPwdHandlers.logPwdInput);
}

export function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.body.classList.remove('show-modal');
  refs.openModalBtn.classList.remove('is-active');
  hidePwd(inputPwdHandlers.regPwdBtn, inputPwdHandlers.regPwdInput);
  hidePwd(inputPwdHandlers.regConfPwdBtn, inputPwdHandlers.logConfPwdInput);
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