import { refs } from './helpers/refs';
import { signUp } from '../auth';
import { onCloseModal } from '../personal-cabinet/registration-modal';
import { showAlertText } from './helpers/helpers';
    
export let userName = 'name';

refs.regForm.addEventListener('submit', onSignupSubmit);

function onSignupSubmit(evt) {
    evt.preventDefault();
    refs.regSubmitBtn.blur();

    const userInfo = {
        name: null,
        email: null,
        password: null,
        confirmPassword: null,
    };
    const {
        elements: { name, email, password, confirmPassword}
    } = evt.currentTarget;

    userInfo.name = name.value;
    userInfo.email = email.value;
    userInfo.password = password.value;
    userInfo.confirmPassword = confirmPassword.value;
    
    if (name.value === '' ||
        email.value === '' ||
        password.value === '' ||
        confirmPassword.value === '') {
        showAlertText(refs.regFormAlertText, 'Будь ласка, заповніть усі поля');
        return;
    }

    if (password.value !== confirmPassword.value) {
        showAlertText(refs.regFormAlertText, 'Паролі не співпадають, спробуйте ще раз');
        return;
    }

    refs.regForm.reset();
    onCloseModal();
    handleSignUpRes(userInfo);
}

async function handleSignUpRes(userInfo) {
    const res = await signUp(userInfo);
    
    if (res === 409) {
        showAlertText(refs.alertText, 'Такий користувач вже зареєстрований');
    } else {
        showAlertText(refs.alertText, 'Для продовження реєстрації, підтвердьте Вашу пошту');
    }
}
// 409: "Email in use"