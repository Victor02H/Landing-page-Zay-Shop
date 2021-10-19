let lockBodyScroll = document.querySelector('body');
let menuButton = document.querySelector('#menu-button');
let menuMobile = document.querySelector('#menu-mobile');

function openMenuMobile() {

    menuMobile.classList.toggle('show_menu');

    if (menuMobile.classList.contains('show_menu')) {
        lockBodyScroll.classList.add('lockScroll');
    } else {
        lockBodyScroll.classList.remove('lockScroll');
    }

}

menuButton.addEventListener("click", openMenuMobile);
