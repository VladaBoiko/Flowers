const refs = {
    openMenuBtn: document.querySelector('[data-open-menu-btn]'),
    closeMenuBtn: document.querySelector('[data-close-menu-btn]'),
    menu: document.querySelector('[data-personal-menu]'), //for mobile
    
    profileBtn: document.querySelector('[data-pers-btn]'),
    ordersBtn: document.querySelector('[data-order-btn]'),
    notifBtn: document.querySelector('[data-notif-btn]'),
    favBtn: document.querySelector('[data-fav-btn]'),

    profile: document.querySelector('#profile'),
    orders: document.querySelector('#pers-orders'),
    notif: document.querySelector('#pers-notif'),
    fav: document.querySelector('#pers-fav'),
}

refs.openMenuBtn.addEventListener('click', openMobMenu);
refs.closeMenuBtn.addEventListener('click', onCloseMenuBtn)
refs.menu.addEventListener('click', onMenuList);

let currentContent = document.querySelector('.pers-current-js');
let currentBtn = document.querySelector('.currentBtn');
 
function onMenuList(evt) {

    if (evt.target === refs.profileBtn) {
        isCurrent(refs.profile);
        isNotEqual(refs.profile, refs.profileBtn);
        return;
    }
    if (evt.target === refs.ordersBtn) {
        isCurrent(refs.orders);
        isNotEqual(refs.orders, refs.ordersBtn);
        return;
    }
    if (evt.target === refs.notifBtn) {
        isCurrent(refs.notif);
        isNotEqual(refs.notif, refs.notifBtn);
        return;
    }
    if (evt.target === refs.favBtn) {
        isCurrent(refs.fav);
        isNotEqual(refs.fav, refs.favBtn);
        return;
    }
}

function isCurrent(contentName) {
    if (contentName.classList.contains('pers-current-js')) {
        return;
    }
}

function isNotEqual(contentName, btnName) {
    if (currentContent !== contentName) {
        changeCurrentContent(contentName);
        changeCurrentBtn(btnName);
    }
}

function changeCurrentContent(newContent) {
    currentContent.classList.remove('pers-current-js')
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
