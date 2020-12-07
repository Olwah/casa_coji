// DOM STRINGS

export const expandRoom = (roomExpandItem, roomItemInfo, roomItemTitle, roomItemPrice, roomDetails) => {
    if (roomDetails.style.maxHeight) {
        roomDetails.style.maxHeight = null;
        [roomExpandItem, roomItemInfo, roomItemTitle, roomItemPrice].forEach(
            (el) => {
                el.classList.remove('is-active');
            }
        );
    } else {
        roomDetails.style.maxHeight = roomDetails.scrollHeight + 'px';
        [roomExpandItem, roomItemInfo, roomItemTitle, roomItemPrice].forEach(
            (el) => {
                el.classList.add('is-active');
            }
        );
    }
};

export const focusRoomImage = (roomGalleryItem, roomFocusImage) => {
    const itemSrc = roomGalleryItem.getAttribute('src');
    roomFocusImage.setAttribute('src', itemSrc);
}
