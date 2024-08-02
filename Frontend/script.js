let index = 0;
const slideInterval = 5000; // Time in milliseconds (5000ms = 5 seconds)

function showNextSlide() {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slides img").length;

  index++;
  if (index >= totalSlides) {
    index = 0;
  }

  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Change image every 5 seconds (5000ms)
setInterval(showNextSlide, slideInterval);
