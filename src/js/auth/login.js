// Uncaught SyntaxError: Unexpected token '<' (at helpers.js:1:1)
import { refs } from './helpers/refs';
import { logIn } from '../auth';
import { showAlertText } from './helpers/showAlertText';


export let TOKEN = 'token';
const headerUserIcon = document.querySelector('[data-header-pers-link]');

checkActivePage()

export function checkActivePage() {
    if (refs.loginSection === null) { //костиль
        return;
    }
    refs.loginForm.addEventListener('submit', onLoginSubmit);
}

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
        console.log('спрацьовує empty fields condition'); //?
        return;
    }
    // refs.loginForm.reset();
    handleLoginRes(userInfo);
}

export async function handleLoginRes(userData) {
    const res = await logIn(userData);
    let userName = localStorage.getItem('name');
    // console.log('userName', userName)
    // треба, щоб бек повнув значення поля name з регістрації???
    // console.log(res) //token
    if (res === 401) {
        // в консолі:
        // POST https://server-flower.herokuapp.com/user/ 401 (Unauthorized)
        showAlertText(refs.loginFormAlertText, 'Електронна пошта або пароль невірні');
    } else {
        if (!userName) {
            return;
        }

        handleUserName(userName)
        goToUserCab();
        localStorage.setItem(TOKEN, res.token);
        refs.loginForm.reset();
    }
}

function handleUserName(userName) {
    userName = `${userName.slice(0, 1).toUpperCase()}${userName.slice(1, userName.length).toLowerCase()}`
    refs.profileForm.name.value = userName;
}

function goToUserCab() {
    refs.loginSection.classList.add('is-hidden');
    refs.personalCab.classList.remove('is-hidden');
    // closeIfModalOpen(refs.body.classList);
    headerUserIcon.addEventListener('click', e => e.preventDefault())
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
// else if (localStorage.getItem(TOKEN) === null) { //for test
//     console.log('sad face')
//     showAlertText(refs.loginFormAlertText, 'немає token');
// }