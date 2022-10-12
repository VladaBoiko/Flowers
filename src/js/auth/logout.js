import { refs } from "./helpers/refs";
import { logOut } from '../auth';
import { TOKEN } from '../auth/login';

refs.logoutBtn.addEventListener('click', onLogoutBtn);

async function onLogoutBtn() {
    await logOut();
    localStorage.removeItem(TOKEN); //?
    logOutUserCab();
}

// fn зворотня до goToUserCab from '../personal-cabinet/helpers';
function logOutUserCab() {
    refs.loginSection.classList.remove('is-hidden');
    refs.personalCab.classList.add('is-hidden');
    // нюанс: в полях форми є данні, які користувач вводив при вході/рестрації⚠️
}