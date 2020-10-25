

const photos = document.getElementById('photos');
const noImage = document.getElementById('chosen');
const clear = document.getElementById('clear');

const noImageReturn = {src: noImage.src};

function changeimage (event) {
    if (event.target.src) {
        noImage.src = event.target.src;
    } else if (event.target.value !== undefined) {
        noImage.src = event.path[1].firstElementChild.src;
    }
};

function clearimage () {
    noImage.src = noImageReturn.src;
};

photos.addEventListener('click', changeimage);
clear.addEventListener('click', clearimage);






