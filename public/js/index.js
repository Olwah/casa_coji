import Splide from '@splidejs/splide';
import { toggleNav } from './navigation';
import { expandRoom } from './rooms';

// NAVIGATION CONTROLLER
const navBtn = document.querySelector('.nav__btn');
const navClose = document.querySelector('.nav__close');
[navBtn, navClose].forEach((el) => el.addEventListener('click', toggleNav));

// HERO SLIDER MOBILE
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#hero-slider', {
        cover: true,
        type: 'fade',
        perPage: 1,
        gap: 0,
        speed: 800,
        heightRatio: 1,
        arrows: false,
        autoplay: true,
        rewind: true,
        classes: {
            pagination: 'splide__pagination home__overview-pagination', // container
            page: 'splide__pagination__page home__overview-page' // each button
        }
    }).mount();
});

// FOOD SLIDER MOBILE
document.addEventListener('DOMContentLoaded', function () {
    var categoryNavSlider = new Splide('#foodNav-slider', {
        fixedWidth: 100,
        height: 60,
        gap: 10,
        cover: true,
        isNavigation: true,
        pagination: false,
        focus: 'center',
        classes: {
            arrow: 'splide__arrow food__splide-arrow'
        },
        breakpoints: {
            600: {
                fixedWidth: 66,
                height: 40
            }
        }
    }).mount();

    var categorySlider = new Splide('#food-slider', {
        type: 'fade',
        //heightRatio: 0.5,
        fixedHeight: '50vh',
        pagination: false,
        arrows: false,
        cover: true
    }); // do not call mount() here.

    categorySlider.sync(categoryNavSlider).mount();
});

// ROOM CONTROLLER
const roomExpand = document.querySelector('.rooms__expand');
const roomExpands = document.querySelectorAll('.rooms__expand');

if (roomExpand) {
    roomExpands.forEach((el) => {
        el.addEventListener('click', expandRoom);
    });
}