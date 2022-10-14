import { refs } from './helpers/refs';
import { logOut } from '../auth';
import { TOKEN } from '../auth/login';
import { userName } from './sign-up';

refs.logoutBtn.addEventListener('click', onLogoutBtn);

async function onLogoutBtn() {
    await logOut();
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(userName);
    logOutUserCab();
}

function logOutUserCab() {
    refs.loginSection.classList.remove('is-hidden');
    refs.personalCab.classList.add('is-hidden');
}