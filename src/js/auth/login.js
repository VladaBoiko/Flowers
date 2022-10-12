import { refs } from "./helpers/refs";
import { logIn } from '../auth';
import {goToUserCab } from './helpers/helpers';

export let TOKEN = 'token';

refs.loginForm.addEventListener('submit', onLoginSubmit)

function  onLoginSubmit(evt) {
    evt.preventDefault();
    refs.loginSubmitBtn.blur();

    const userInfo = { email: null, password: null };
    const {
        elements: { email, password }
    } = evt.currentTarget;

    userInfo.email = email.value;
    userInfo.password = password.value;

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!') // текст-випадашка
    }
    
    // console.log(`Email: ${email.value}, Password: ${password.value}`);
    handleLoginRes(userInfo, evt);
}

export async function handleLoginRes(userData, evt) {
    const res = await logIn(userData);

    if (res === 401) {
        // в консолі:
        // POST https://server-flower.herokuapp.com/user/ 401 (Unauthorized)
        console.log("user does not exist, please, signup first"); // текст-випадашка
        return;

        //  if user didn't confirm email:
    } else if (!res.isActivate) {
        console.log("please, check your email for confirm");
        goToUserCab(evt); // <-⚠️прибери потім!!!
    } else {
        goToUserCab(evt);
        localStorage.setItem(TOKEN, res.token);
    }
}
// 401 "user does not exist"