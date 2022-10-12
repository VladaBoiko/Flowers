import { token, validate } from "../auth";
import { TOKEN } from "./login";
import {goToUserCab } from './helpers/helpers';

function loginReload() {
    const localToken = localStorage.getItem('token');
    if (localToken === null) {
        return;
    }
    token.set(localToken);
    getValidateRes() 
}

async function getValidateRes() {
    const res = await validate();

    if (res === 401) {
        localStorage.removeItem(TOKEN); //просто ключ-рядок
    } else {
        localStorage.setItem(TOKEN, res.token);
        goToUserCab();
    }
}

// 401 "message": "Not authorized"