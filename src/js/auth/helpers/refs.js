// Uncaught SyntaxError: Unexpected token '<' (at helpers.js:1:1)
export const refs = {
    loginForm: document.querySelector('[data-login-form]'),
    regForm: document.querySelector('[data-reg-form]'),
    loginSection: document.querySelector('[data-login-section]'),
    personalCab: document.querySelector('[data-pers-cab-main]'),
    backdrop: document.querySelector('[data-reg-modal]'),
    body: document.querySelector("body"),

    openModalBtn: document.querySelector('[data-reg-modal-open]'), //Реєстрація
    closeModalBtn: document.querySelector('[data-reg-modal-close]'), //cross
    regSubmitBtn: document.querySelector('[data-submit-reg-btn]'), //Зареєструватися
    loginSubmitBtn: document.querySelector('[data-login-btn]'), //Вхід
    logoutBtn: document.querySelector('[data-logout-btn]'), //Вийти

    loginFormAlertText: document.querySelector('[data-login-alert-text]'),
    regFormAlertText: document.querySelector('[data-reg-alert-text]'),
    alertText: document.querySelector('[data-pers-alert-text]'),

    // profileForm: document.querySelector('[data-profile-form]'),
};