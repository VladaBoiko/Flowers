const refs = {
    profileForm: document.querySelector('[data-profile-form]'),
    notifForm: document.querySelector('[data-pers-notif-form]'),
    profileFormBtn: document.querySelector('[data-profile-form-btn]'),
    notifFormBtn: document.querySelector('[data-notif-form-btn]'),
    forgotPwdLink: document.querySelector('[data-forgot-pwd-link]'),
}

refs.profileForm.addEventListener('submit', onSubmitProfileForm);
refs.notifForm.addEventListener('submit', onSubmitNotifForm);
refs.forgotPwdLink.addEventListener('click', preventReloadPage);

function onSubmitProfileForm(evt) {
    preventReloadPage(evt);
    refs.profileFormBtn.blur();
}

function onSubmitNotifForm(evt) {
    preventReloadPage(evt);
    refs.notifFormBtn.blur();
}

function preventReloadPage(evt) {
    evt.preventDefault();
}