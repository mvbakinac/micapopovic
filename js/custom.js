window.addEventListener("scroll", function () {
  const header = document.querySelector(".navbar");
  //   const logo = document.querySelector(".logo");
  //   const togle = document.querySelector(".tgl-switch");
  header.classList.toggle("black", window.scrollY > 400);
  //   logo.classList.toggle("black-logo", window.scrollY > 400);
  //   togle.classList.toggle("black-logo", window.scrollY > 400);
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      767: {
        items: 2,
        nav: false,
      },
      992: {
        items: 2,
        nav: true,
        loop: false,
      },
      1200: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });
});
