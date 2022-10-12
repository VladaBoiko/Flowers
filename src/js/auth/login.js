// обробити кнопку в header?
import { refs } from "./helpers/refs";
import { logIn } from '../auth';


export let TOKEN = 'token'; //просто ключ-рядок

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
    handleLoginRes(userInfo);
}

export async function handleLoginRes(userData) {
    const res = await logIn(userData);

    if (res === 401) {
        // в консолі:
        // POST https://server-flower.herokuapp.com/user/ 401 (Unauthorized)
        console.log("user does not exist, please, signup first"); // текст-випадашка
    } else {
        goToUserCab();
        localStorage.setItem(TOKEN, res.token);
    }
}

function goToUserCab() {
    // evt.preventDefault();
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