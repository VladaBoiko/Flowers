// Uncaught SyntaxError: Unexpected token '<' (at validate.js:1:1)
import { refs } from "./helpers/refs";
import { token, validate } from "../auth";
import { TOKEN } from "./login";

loginReload()

export function loginReload() {
    const localToken = localStorage.getItem('token');
    if (localToken === null) {//undefined
        return;
    }
    token.set(localToken);
    // console.log("qweqwe")
    handleValidateRes();
}

async function handleValidateRes() {
    const res = await validate();
    console.log(res)
    // console.log(localStorage.setItem('token', res.token))
    if (res === 401) {
        localStorage.removeItem('token'); //просто ключ-рядок
    } else {
        localStorage.setItem('token', res.data.token);
        showToUserCab();
    }
}

function showToUserCab() {
    refs.loginSection.classList.add('is-hidden');
    refs.personalCab.classList.remove('is-hidden');
}

// 401 "message": "Not authorized"