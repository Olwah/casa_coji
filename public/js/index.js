import Splide from '@splidejs/splide';
import { showAlert } from './alerts';
import { toggleNav } from './navigation';
import { expandRoom, focusRoomImage } from './rooms';
import { expandActivities } from './coursesActivities';
import { createItem } from './admin';

// NAVIGATION CONTROLLER
const navBtn = document.querySelector('.nav__btn');
const navClose = document.querySelector('.nav__close');
[navBtn, navClose].forEach((el) => el.addEventListener('click', toggleNav));

// HERO SLIDER MOBILE
const home = document.querySelector('.home');

if (home) {
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
}

// FOOD SLIDER MOBILE
const food = document.querySelector('.food');

if (food) {
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
}

// STAY CONTROLLER
const roomItems = document.querySelectorAll('.rooms__item');
const roomItem = document.querySelector('.rooms__item');

if (roomItem) {
    roomItems.forEach((el) => {
        el.addEventListener('click', (e) => {
            // Expands the info section when the dropdown icon is clicked
            if (e.target.matches('.rooms__expand, .rooms__expand *')) {
                const roomExpandItem = e.target.closest('.rooms__expand');
                const roomItemInfo = e.target.closest('.rooms__item-info');
                const roomItemTitle = e.target.closest('.rooms__item-info')
                    .firstElementChild;
                const roomItemPrice = e.target.closest('.rooms__item-info')
                    .firstElementChild.nextElementSibling;
                const roomDetails = e.target.closest('.rooms__expand')
                    .parentElement.parentElement.lastElementChild;
                expandRoom(
                    roomExpandItem,
                    roomItemInfo,
                    roomItemTitle,
                    roomItemPrice,
                    roomDetails
                );
            }
            // Changes the hero image for each room when gallery items are clicked
            if (e.target.matches('.rooms__gallery, .rooms__gallery *')) {
                const roomGalleryItem = e.target.closest(
                    '.rooms__gallery-item-img'
                );
                const roomItemHero = e.target.closest('.rooms__item')
                    .firstElementChild;
                focusRoomImage(roomGalleryItem, roomItemHero);
            }
        });
    });
}

// COURSES & ACTIVITIES CONTROLLER
const activitiesType = document.querySelector('.activities__type');
const activitiesTypes = document.querySelectorAll('.activities__type');

if (activitiesType) {
    activitiesTypes.forEach((el) => {
        el.addEventListener('click', (e) => {
            if (e.target.matches('.activities__type, .activities__type *')) {
                const activityTypeIcon = e.target.closest('.activities__type')
                    .lastElementChild.lastElementChild;
                const activityItem = e.target.closest('.activities__type')
                    .nextElementSibling;
                expandActivities(activityTypeIcon, activityItem);
            }
        });
    });
}

// ADMIN PAGE CONTROLLER
const admin = document.querySelector('.admin');
const adminForms = document.querySelectorAll('.admin__form');
const stayForm = document.getElementById('stay__form');

if (admin) {
    stayForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('stay-name').value;
        const nombre = document.getElementById('stay-nombre').value;
        const price = document.getElementById('stay-price').value;
        const sleeps = document.getElementById('stay-sleeps').value;
        const summary = document.getElementById('stay-summary').value;
        const sumario = document.getElementById('stay-sumario').value;
        const description = document.getElementById('stay-description').value;
        const descripción = document.getElementById('stay-descripcion').value;

        const formObj = { name, nombre, price, sleeps, summary, sumario, description, descripción };

        /*
        const form = new FormData();
        form.set('name', document.getElementById('stay-name').value);
        form.append('nombre', document.getElementById('stay-nombre').value);
        form.append(
            'price',
            parseInt(document.getElementById('stay-price').value)
        );
        form.append(
            'sleeps',
            parseInt(document.getElementById('stay-sleeps').value)
        );
        form.append('summary', document.getElementById('stay-summary').value);
        form.append('sumario', document.getElementById('stay-sumario').value);
        form.append(
            'description',
            document.getElementById('stay-description').value
        );
        form.append(
            'descripción',
            document.getElementById('stay-descripcion').value
        );
        */
        // As we only have a single file that can be uploaded we need to select the first element in the array
        //form.append('imageCover', document.getElementById('stay-imageCover').files[0]);
        //form.append('images', document.getElementById('stay-images').files);

        createItem(formObj, 'accommodation');
    });
}

// ALERTS CONTROLLER
const alertMessage = document.querySelector('body').dataset.alert;
if (alertMessage) showAlert('success', alertMessage, 15);
