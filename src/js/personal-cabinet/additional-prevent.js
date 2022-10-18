const refs = {
    profileForm: document.querySelector('[data-profile-form]'),
    notifForm: document.querySelector('[data-pers-notif-form]'),
    profileFormBtn: document.querySelector('[data-profile-form-btn]'),
    notifFormBtn: document.querySelector('[data-notif-form-btn]'),
    forgotPwdLink: document.querySelector('[data-forgot-pwd-link]'),
}

refs.profileForm.addEventListener('submit', onSubmitProfileForm);
refs.notifForm.addEventListener('submit', onSubmitNotifForm);
refs.forgotPwdLink.addEventListener('click', onLinkClick);

function onSubmitProfileForm(evt) {
    onSubmit(evt);
    refs.profileFormBtn.blur();
}

function onSubmitNotifForm(evt) {
    onSubmit(evt);
    refs.notifFormBtn.blur();
}

function onLinkClick(evt) {
    onSubmit(evt);
    evt.target.blur()   
}

function onSubmit(evt) {
    evt.preventDefault();
}