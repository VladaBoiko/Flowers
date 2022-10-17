const refs = {
    profileForm: document.querySelector('[data-profile-form]'),
    notifForm: document.querySelector('[data-pers-notif-form]'),
    profileFormBtn: document.querySelector('[data-profile-form-btn]'),
    notifFormBtn: document.querySelector('[data-notif-form-btn]'),
}

refs.profileForm.addEventListener('submit', onSubmitProfileForm);
refs.notifForm.addEventListener('submit', onSubmitNotifForm);

function onSubmitProfileForm(evt) {
    onSubmit(evt);
    refs.profileFormBtn.blur();
}

function onSubmitNotifForm(evt) {
    onSubmit(evt);
    refs.notifFormBtn.blur();
}

function onSubmit(evt) {
    evt.preventDefault();
}