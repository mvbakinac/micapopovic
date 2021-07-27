//Select element function

const selectElement = function (element) {
  return document.querySelector(element);
};

let menuToggler = selectElement(".tgl-switch");
let body = selectElement("body");
let nav = selectElement(".nav-list");

menuToggler.addEventListener("click", function () {
  body.classList.toggle("open");
});
nav.addEventListener("click", function () {
  body.classList.toggle("open");
});

window.addEventListener("scroll", function () {
  const header = document.querySelector(".navbar");
  const logo = document.querySelector(".logo");
  header.classList.toggle("black", window.scrollY > 60);
  logo.classList.toggle("small-logo", window.scrollY > 60);
});

// scroll reveal start
window.sr = ScrollReveal();
sr.reveal("#img-1", {
  origin: "left",
  duration: 1500,
  delay: 50,
  distance: "10px",
});
sr.reveal("#img-3", {
  origin: "right",
  duration: 1500,
  delay: 50,
  distance: "10px",
});
sr.reveal("#img-2", {
  origin: "bottom",
  duration: 1500,
  delay: 40,
  distance: "10px",
});
sr.reveal(".logoi", {
  origin: "bottom",
  duration: 1500,
  delay: 30,
  distance: "10px",
});
sr.reveal(".kontakt-div", {
  origin: "bottom",
  duration: 1500,
  delay: 150,
  distance: "10px",
});
sr.reveal(".scroll-sm", {
  origin: "bottom",
  duration: 1500,
  delay: 150,
  distance: "10px",
});

// scroll reveal end
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
      576: {
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
