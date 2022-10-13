import { refs } from "./helpers/refs";
import { logOut } from '../auth';
import { TOKEN } from '../auth/login';


refs.logoutBtn.addEventListener('click', onLogoutBtn);

async function onLogoutBtn() {
    await logOut();
    localStorage.removeItem(TOKEN);
    logOutUserCab();
}

function logOutUserCab() {
    refs.loginSection.classList.remove('is-hidden');
    refs.personalCab.classList.add('is-hidden');
}