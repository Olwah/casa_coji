// DOM Strings
const navClosed = document.getElementById('nav-closed');
const navOpen = document.getElementById('nav-open');
const navBtn = document.querySelectorAll('.nav__btn');

export const toggleNav = () => {
    navOpen.classList.contains('nav__hide') ? openNav() : closeNav();
}

const openNav = () => {
    [navOpen, navClosed].forEach(el => el.classList.toggle('nav__hide'));
    navOpen.classList.toggle('is-open');
    navBtn.forEach(el => el.classList.toggle('is-open'));
}

const closeNav = () => {
    navOpen.classList.toggle('is-open');
    navBtn.forEach(el => el.classList.toggle('is-open'));
    navClosed.classList.toggle('nav__hide');
    setTimeout(() => {
        navOpen.classList.toggle('nav__hide');
    }, 1600);
}