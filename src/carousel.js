let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let slider = document.querySelector('.slider');

let sliderList = slider.querySelector('.list');
let sliderItems = slider.querySelectorAll('.list .item');
let thumbnail = document.querySelector('.thumbnail');
let thumbnailItems = thumbnail.querySelectorAll('.item');

thumbnail.appendChild(thumbnailItems[0]);

// function for next button
nextBtn.onclick = function () {
    moveSlider('next');
}

// function for prev button
prevBtn.onclick = function () {
    moveSlider('prev');
}

// Auto-slide every 10 seconds
let autoSlideInterval = setInterval(function () {
    moveSlider('next');
}, 10000); // 10 seconds = 10000 milliseconds

function moveSlider(direction) {
    sliderItems = slider.querySelectorAll('.item');
    thumbnailItems = thumbnail.querySelectorAll('.item');

    if (direction === 'next') {
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    }
}
