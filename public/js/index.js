import Splide from '@splidejs/splide';
import { lookup } from 'dns';

// HERO SLIDER MOBILE
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#hero-slider', {
        'cover': true,
        'type': 'fade',
        'perPage': 1,
        'gap': 0,
        'speed': 800,
        'heightRatio': 1,
        //'height': '70vh',
        'arrows': false,
        'autoplay': true,
        'rewind': true
    }).mount();
});