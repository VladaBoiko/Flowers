import { refs } from './helpers/refs';
import { logIn } from '../auth';
import { showAlertText } from './helpers/helpers';

export const TOKEN = 'token';
export const userName = 'name';

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
  refs.loginSection.classList.add('is-hidden');
  refs.personalCab.classList.remove('is-hidden');
  refs.headerUserIcon.addEventListener('click', e => e.preventDefault());
}

// 401 "user does not exist"
// else if (!res.isActivate) {
//     console.log("please, check your email for confirm");
// }