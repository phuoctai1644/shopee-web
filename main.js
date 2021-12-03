const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// == Open Login / Register modal ==
const registerNav = $('.js-navbar__register');
const signInNav = $('.js-navbar__sign-in');
const overlayModal = $('.modal__overlay');
const modal = $('.modal');

function openRegisterModal() {
    modal.classList.add('modal--open');
    if ($('.auth-form.js-sign-in-auth-form.active')) {
        $('.auth-form.js-sign-in-auth-form.active').classList.remove('active');
    }
    $('.auth-form.js-register-auth-form').classList.add('active');
}

function openSignInModal() {
    modal.classList.add('modal--open');
    if ($('.auth-form.js-register-auth-form.active')) {
        $('.auth-form.js-register-auth-form.active').classList.remove('active');
    }
    $('.auth-form.js-sign-in-auth-form').classList.add('active');
}

function backToHomeFromModal() {
    modal.classList.remove('modal--open');
    if ($('.auth-form.js-register-auth-form.active')) {
        $('.auth-form.js-register-auth-form.active').classList.remove('active');
    }
    else {
        $('.auth-form.js-sign-in-auth-form.active').classList.remove('active');
    }
    e.stopPropagation();
}
// ========================================================

// == Switch between Sign in and Register ==
const signInswitchBtn = $$('.auth-form__switch-btn')[0];
const registerswitchBtn = $$('.auth-form__switch-btn')[1];

signInswitchBtn.addEventListener('click', switchToSignIn);
registerswitchBtn.addEventListener('click', switchToRegister);

function switchToRegister() {
    if ($('.auth-form.js-sign-in-auth-form.active')) {
        $('.auth-form.js-sign-in-auth-form.active').classList.remove('active');
    }
    $('.auth-form.js-register-auth-form').classList.add('active');
}

function switchToSignIn() {
    if ($('.auth-form.js-register-auth-form.active')) {
        $('.auth-form.js-register-auth-form.active').classList.remove('active');
    }
    $('.auth-form.js-sign-in-auth-form').classList.add('active');
}
// ========================================================


// == Check In Shop/ Out Shop in header search ==
const inOutShopOptions = $$('.header__search-bar-option-items');

inOutShopOptions.forEach(option => {
    option.onclick = () => {
        if ($('.header__search-bar-option-items.header__search-bar-option-items--actived')) {
            $('.header__search-bar-option-items.header__search-bar-option-items--actived').classList.remove('header__search-bar-option-items--actived');
        }
        option.classList.add('header__search-bar-option-items--actived');
    }
});
// ========================================================
