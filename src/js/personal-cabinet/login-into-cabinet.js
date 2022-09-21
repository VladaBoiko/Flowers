const refs = {
    loginForm: document.querySelector('[data-login-form]'),
    signupForm: document.querySelector('[data-signup-form]'),
    loginSection: document.querySelector('[data-login-section]'),
    personalCab: document.querySelector('[data-pers-cab-main]'),
    body: document.querySelector("body"),
}

refs.loginForm.addEventListener('submit', goToUserCab);
refs.signupForm.addEventListener('submit', goToUserCab);

function goToUserCab(evt) {
    evt.preventDefault();
    refs.loginSection.classList.add('is-hidden');
    refs.personalCab.style.display = "block";

    isMadalOpen(refs.body.classList);
}

function isMadalOpen(bodyClasslist) {
    if (bodyClasslist.contains('show-modal')) {
        bodyClasslist.remove('show-modal');
    }
}
