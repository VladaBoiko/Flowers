import { refs } from './helpers/refs';
import { logIn } from '../auth';
import { showAlertText } from './helpers/helpers';
import { inputPwdHandlers, hidePwd } from '../personal-cabinet/show-pwd';

export const TOKEN = 'token';
export const userName = 'name';

refs.headerUserIcon.addEventListener('click', e => e.preventDefault());
checkActivePage();

export function checkActivePage() {
  if (refs.loginSection === null) {
    return;
  }
  refs.loginForm.addEventListener('submit', onLoginSubmit);
}

function onLoginSubmit(evt) {
  evt.preventDefault();

  refs.loginSubmitBtn.blur();

  const userInfo = { email: null, password: null };
  const {
    elements: { email, password },
  } = evt.currentTarget;

  userInfo.email = email.value;
  userInfo.password = password.value;

  if (email.value === '' || password.value === '') {
    showAlertText(refs.loginFormAlertText, 'Будь ласка, заповніть усі поля');
    return;
  }
  handleLoginRes(userInfo);
}

export async function handleLoginRes(userData) {
  const res = await logIn(userData);

  if (res === 401) {
    showAlertText(refs.loginFormAlertText, 'Електронна пошта або пароль невірні');
  } else {
    goToUserCab();
    localStorage.setItem(TOKEN, res.token);
    localStorage.setItem(userName, res.name);
    refs.profileForm.name.value = res.name;
    refs.loginForm.reset();
  }
}

function goToUserCab() {
  hidePwd(inputPwdHandlers.logPwdBtn, inputPwdHandlers.logPwdInput);
  refs.loginSection.classList.add('is-hidden');
  refs.personalCab.classList.remove('is-hidden');
}

// 401 "user does not exist"
