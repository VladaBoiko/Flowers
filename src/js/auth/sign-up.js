// *тут користувач не може зайти в pers-cab
import { signUp } from "../auth";
import { onCloseModal } from "../personal-cabinet/registration-modal";
import { refs } from '../personal-cabinet/helpers';

refs.regForm.addEventListener('submit', onSignupSubmit)

function onSignupSubmit(evt) {
    evt.preventDefault();
    refs.regSubmitBtn.blur();

    const userInfo = { email: null, password: null };
    const {
        elements: { name, email, password, confirmPassword}
    } = evt.currentTarget;

    userInfo.name = name.value;
    userInfo.email = email.value;
    userInfo.password = password.value;

    // потрібно тут  чи в html/required?
    if (email.value === '' || password.value === '' || name.value === '') {
        return console.log('Please fill in all the fields!'); // текст-випадашка
    }

    if (password.value !== confirmPassword.value) {
        console.log('password !== confirmPassword'); // текст-випадашка
        return;
    }
    
        console.log(`Name: ${name.value}, Email: ${email.value}, 
    Password: ${password.value}, 
    confirmPassword: ${confirmPassword.value}`);

    onCloseModal();
    handleSignUpRes(userInfo);
}

async function handleSignUpRes(userInfo) {
    const res = await signUp(userInfo);
    // тільки 2 вар. дії
    if (res === 409) {
        // POST https://server-flower.herokuapp.com/user/signup 409 (Conflict)
        console.log("Email in use"); // текст-випадашка 
    } else {
        console.log('To continue registration,please, confirm your email'); // текст-випадашка
    }
}

// 409: "Email in use"