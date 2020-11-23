// DOM STRINGS

export const expandRoom = () => {
    const roomsItemInfo = document.getElementsByClassName('rooms__item-info');
    const roomsItemTitle = document.getElementsByClassName('rooms__item-title');
    const roomsItemPrice = document.getElementsByClassName('rooms__item-price');
    const expandIcons = document.getElementsByClassName('rooms__expand');

    for (let i = 0; i < roomsItemInfo.length; i++) {
        roomsItemInfo[i].addEventListener('click', function () {
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                [expandIcons[i], roomsItemTitle[i], roomsItemPrice[i]].forEach(
                    (el) => {
                        el.classList.remove('is-active');
                    }
                );
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                [expandIcons[i], roomsItemTitle[i], roomsItemPrice[i]].forEach(
                    (el) => {
                        el.classList.add('is-active');
                    }
                );
            }
        });
    }
};
