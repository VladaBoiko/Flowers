const refs = {
    openMenuBtn: document.querySelector('[data-open-menu-btn]'),
    closeMenuBtn: document.querySelector('[data-close-menu-btn]'),
    menu: document.querySelector('[data-personal-menu]'),
    
    profileBtn: document.querySelector('[data-pers-btn]'),
    ordersBtn: document.querySelector('[data-order-btn]'),
    notifBtn: document.querySelector('[data-notif-btn]'),
    favBtn: document.querySelector('[data-fav-btn]'),

    profile: document.querySelector('[data-profile]'),
    orders: document.querySelector('[data-pers-orders]'),
    notif: document.querySelector('[data-pers-notif]'),
    fav: document.querySelector('[data-pers-fav]'),
}

refs.openMenuBtn.addEventListener('click', openMobMenu);
refs.closeMenuBtn.addEventListener('click', onCloseMenuBtn);
refs.menu.addEventListener('click', onMenuList);

let currentContent = document.querySelector('.pers-current-js');
let currentBtn = document.querySelector('.currentBtn');
 
function onMenuList(evt) {
    onMenuItem(evt, refs.profile, refs.profileBtn);
    onMenuItem(evt, refs.orders, refs.ordersBtn);
    onMenuItem(evt, refs.notif, refs.notifBtn);
    onMenuItem(evt, refs.fav, refs.favBtn);
}

function onMenuItem(evt, newContent, newBtn) {
    if (isNotNewButton(evt, newBtn) || isNewContent(newContent)) {
        return;
    }
    changeCurrentContent(newContent);
    changeCurrentBtn(newBtn);
}

function isNotNewButton(evt, newBtn) {
    return evt.target !== newBtn;
}

function isNewContent(newContent) {
    return currentContent === newContent;
}

function changeCurrentContent(newContent) {
    currentContent.classList.remove('pers-current-js');
    currentContent.classList.add('visually-hidden');

    currentContent = newContent;
    newContent.classList.remove('visually-hidden');
    newContent.classList.add('pers-current-js');
    onCloseMenuBtn()
}

function changeCurrentBtn(newCurrentBtn) {
    currentBtn.classList.remove('currentBtn');
    currentBtn = newCurrentBtn;
    newCurrentBtn.classList.add('currentBtn');
}

function openMobMenu() {
    currentContent.classList.add('visually-hidden');
    refs.menu.classList.remove('is-hidden');
    switchBtnVisibility(refs.openMenuBtn);
    switchBtnVisibility(refs.closeMenuBtn);
}

function onCloseMenuBtn() {
    currentContent.classList.remove('visually-hidden');
    refs.menu.classList.add('is-hidden');
    switchBtnVisibility(refs.openMenuBtn);
    switchBtnVisibility(refs.closeMenuBtn);
}

function switchBtnVisibility(btn) {
    btn.classList.toggle('is-hidden');
}