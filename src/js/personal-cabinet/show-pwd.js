import { refs } from '../auth/helpers/refs';

export const inputPwdHandlers = {
    logPwdInput: document.querySelector('[data-log-pwd-input]'),
    regPwdInput: document.querySelector('[data-reg-pwd-input]'),
    logConfPwdInput: document.querySelector('[data-reg-conf-pwd-input]'),

    logPwdBtn: document.querySelector('[data-log-pwd-btn]'),
    regPwdBtn: document.querySelector('[data-reg-pwd-btn]'),
    regConfPwdBtn: document.querySelector('[data-reg-conf-pwd-btn]'),
}

const { loginForm, regForm } = refs;

loginForm.addEventListener('click', clickOnShowPwd);
regForm.addEventListener('click', clickOnShowPwd);

function clickOnShowPwd({target}) {
    handleClick(target, inputPwdHandlers.logPwdBtn, inputPwdHandlers.logPwdInput);
    handleClick(target, inputPwdHandlers.regPwdBtn, inputPwdHandlers.regPwdInput);
    handleClick(target, inputPwdHandlers.regConfPwdBtn, inputPwdHandlers.logConfPwdInput);
}

function handleClick(target, btn, input) {
    if (target === btn) {
        if (input.getAttribute('type') === 'password') {
            showPwd(btn, input);
            return;
        }
        if (input.getAttribute('type') === 'text') {
            hidePwd(btn, input)
            return;
        }
    }
}

export function showPwd(btn, input) {
    input.setAttribute('type', 'text');
    btn.classList.add('show-pwd');
}

export function hidePwd(btn, input) {
    input.setAttribute('type', 'password');
    btn.classList.remove('show-pwd');
}