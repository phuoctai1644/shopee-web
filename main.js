const registerNav = document.querySelector('.js-navbar__register');
const signInNav = document.querySelector('.js-navbar__sign-in');

const overlayModal = document.querySelector('.modal__overlay');
const modal = document.querySelector('.modal')


overlayModal.onclick = (e) => {
    modal.classList.remove('modal--open')
    e.stopPropagation();
}

// js-register-auth-form

// js-sign-in-auth-form 