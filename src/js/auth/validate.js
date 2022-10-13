import { refs } from "./helpers/refs";
import { token, validate } from "../auth";
import { TOKEN } from "./login";

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
    // console.log(res) // потрібно поле data.name
    // console.log(localStorage.setItem('token', res.token))
    if (res === 401) {
        localStorage.removeItem(TOKEN);
    } else {
        localStorage.setItem(TOKEN, res.data.token);
        //
        showToUserCab();
    }
}

// ⚠️спрацьовує із затримкою, видно як зникає log-reg.html
function showToUserCab() {
    refs.loginSection.classList.add('is-hidden');
    refs.personalCab.classList.remove('is-hidden');
}

// 401 "message": "Not authorized"