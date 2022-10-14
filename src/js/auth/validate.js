import { refs } from './helpers/refs';
import { token, validate } from '../auth';
import { TOKEN } from './login';


loginReload();

export function loginReload() {
    const localToken = localStorage.getItem('token');
    if (localToken === null) {
        return;
    }
    token.set(localToken);
    handleValidateRes();
}

async function handleValidateRes() {
    const res = await validate();
    if (res === 401) {
        localStorage.removeItem(TOKEN);
    } else {
        localStorage.setItem(TOKEN, res.data.token);
        let userName = localStorage.getItem('name');
        if (refs.loginSection === null) {
            return
        }
        showToUserCab(userName)
    }
}

function showToUserCab(userName) {
    refs.loginSection.classList.add('is-hidden');
    refs.personalCab.classList.remove('is-hidden');
    refs.profileForm.name.value = userName;
    refs.headerUserIcon.addEventListener('click', e => e.preventDefault());
}
// 401 "message": "Not authorized"