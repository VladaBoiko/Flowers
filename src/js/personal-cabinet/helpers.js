// Uncaught SyntaxError: Unexpected token '<' (at helpers.js:1:1)
export const refs = {
    loginForm: document.querySelector('[data-login-form]'),
    regForm: document.querySelector('[data-reg-form]'),
    loginSection: document.querySelector('[data-login-section]'),
    personalCab: document.querySelector('[data-pers-cab-main]'),

    openModalBtn: document.querySelector('[data-reg-modal-open]'), //Реєстрація
    closeModalBtn: document.querySelector('[data-reg-modal-close]'), //cross
    backdrop: document.querySelector('[data-reg-modal]'),

    regSubmitBtn: document.querySelector('[data-submit-reg-btn]'),//Зареєструватися
    loginSubmitBtn: document.querySelector('[data-login-btn]'), //Вхід

    // logoutBtn: document.querySelector('[data-logout-btn]'), //Вийти
  
    body: document.querySelector("body"),
};

// refs.loginForm.addEventListener('submit', goToUserCab);
// refs.regForm.addEventListener('submit', goToUserCab);

export function goToUserCab(evt) {
    evt.preventDefault();
    refs.loginSection.classList.add('is-hidden');
    refs.personalCab.classList.remove('is-hidden');
    closeIfModalOpen(refs.body.classList);
}

function closeIfModalOpen(bodyClasslist) {
    if (bodyClasslist.contains('show-modal')) {
        bodyClasslist.remove('show-modal');
    }
}