export const expandActivities = (activityTypeIcon, activityItem) => {
    if (activityItem.style.maxHeight) {
        activityTypeIcon.setAttribute('href', 'img/svg/sprite.svg#icon-plus');
        activityItem.style.maxHeight = null;
        activityItem.classList.remove('is-active');
    } else {
        activityTypeIcon.setAttribute('href', 'img/svg/sprite.svg#icon-minus');
        activityItem.style.maxHeight = activityItem.scrollHeight + 'px';
        activityItem.classList.add('is-active');
    }
};
