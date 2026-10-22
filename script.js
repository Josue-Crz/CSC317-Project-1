console.log("Carousel JavaScript loaded!");

const track = document.querySelector(".carousel-track");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");
const counter = document.querySelector(".carousel-counter");
const cards = document.querySelectorAll(".fact-card");

console.log("Total cards found:", cards.length);
let currentIndex = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    counter.textContent = `${currentIndex + 1} / ${cards.length}`;
}

nextButton.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
});

prevButton.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
});