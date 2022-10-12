import { refs } from "./refs";

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