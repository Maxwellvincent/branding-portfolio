let menuBtn = document.getElementsByClassName('menu-btn');
let mobileMenu = document.getElementsByClassName('mobile-menu');


menuBtn[0].addEventListener('click',(e) => {
    mobileMenu[0].classList.toggle('active');
})