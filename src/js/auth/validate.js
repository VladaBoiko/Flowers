import { refs } from "./helpers/refs";
import { token, validate } from "../auth";
import { TOKEN } from "./login";

const headerUserIcon = document.querySelector('[data-header-pers-link]');
loginReload();

export function loginReload() {
    // console.log(refs.loginSection)//null
    const localToken = localStorage.getItem('token');
    if (localToken === null) {
        return;
    }
    token.set(localToken);
    handleValidateRes();
}

async function handleValidateRes() {
    const res = await validate();
    // console.log(res) // потрібно поле data.name
    // console.log(localStorage.setItem('token', res.token))
    if (res === 401) {
        localStorage.removeItem(TOKEN);
    } else {
        localStorage.setItem(TOKEN, res.data.token);
        let userName = localStorage.getItem('name');
        userName = `${userName.slice(0, 1).toUpperCase()}${userName.slice(1, userName.length).toLowerCase()}`
        // refs.profileForm.name.value = userName; //error
        if (refs.loginSection === null) {
            return
        }
        showToUserCab(userName)
    }
}

// ⚠️спрацьовує із затримкою, видно як зникає log-reg.html
function showToUserCab(userName) {
    refs.loginSection.classList.add('is-hidden');
    refs.personalCab.classList.remove('is-hidden');
    refs.profileForm.name.value = userName;
    headerUserIcon.addEventListener('click', e => e.preventDefault());
}
// 401 "message": "Not authorized"