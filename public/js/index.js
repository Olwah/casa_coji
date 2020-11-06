import Splide from '@splidejs/splide';
import { lookup } from 'dns';

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
            page      : 'splide__pagination__page home__overview-page', // each button
        }
    }).mount();
});