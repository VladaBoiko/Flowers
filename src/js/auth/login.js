import { refs } from './helpers/refs';
import { logIn } from '../auth';
import { showAlertText } from './helpers/showAlertText';


export let TOKEN = 'token';

refs.loginForm.addEventListener('submit', onLoginSubmit);

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
        showAlertText(refs.loginFormAlertText, 'Будь ласка, заповніть усі поля');
        return;
    }
    refs.loginForm.reset();
    handleLoginRes(userInfo);
}

export async function handleLoginRes(userData) {
    const res = await logIn(userData);
// треба, щоб бек повнув значення поля name з регістрації
    // console.log(res) //token
    if (res === 401) {
        // в консолі:
        // POST https://server-flower.herokuapp.com/user/ 401 (Unauthorized)
        showAlertText(refs.loginFormAlertText, 'Електронна пошта або пароль невірні');
    } else {
        // refs.profileForm.name.value =  //(data.name)
        goToUserCab();
        localStorage.setItem(TOKEN, res.token);
    }
}

function goToUserCab() {
    refs.loginSection.classList.add('is-hidden');
    refs.personalCab.classList.remove('is-hidden');
    closeIfModalOpen(refs.body.classList);
}

function closeIfModalOpen(bodyClasslist) {
    if (bodyClasslist.contains('show-modal')) {
        bodyClasslist.remove('show-modal');
    }
}

// 401 "user does not exist"
// else if (!res.isActivate) {
//     console.log("please, check your email for confirm");
//     goToUserCab(evt); // <-⚠️прибери потім!!!
//     localStorage.setItem(TOKEN, res.token); // <-⚠️прибери потім!!!
// } 