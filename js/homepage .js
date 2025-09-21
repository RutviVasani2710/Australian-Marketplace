var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".lastSwiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  // centeredSlides: true,
  navigation: {
    nextEl: ".industry-next",
    prevEl: ".industry-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
    },
  },
});
