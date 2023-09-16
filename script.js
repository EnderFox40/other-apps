var container = document.querySelector(".custom-scroll-container");

// Следващите два реда са нужни, за да скролирате с мишката или на тъч устройства.
container.addEventListener("wheel", function (e) {
    container.scrollLeft += e.deltaY;
});

container.addEventListener("touchmove", function (e) {
    container.scrollLeft += e.touches[0].clientX - e.targetTouches[0].clientX;
});
