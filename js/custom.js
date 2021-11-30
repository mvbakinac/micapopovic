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
// sr.reveal(".grid-item", {
//   origin: "bottom",
//   duration: 1500,
//   delay: 150,
//   distance: "20px",
// });

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

$(document).ready(function () {
  $(".img-galery-1").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

// modal

function closeModal() {
  document.getElementById("Modal").style.display = "none";
}
function openModal() {
  document.getElementById("Modal").style.display = "block";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const grids = document.getElementsByClassName("grid-item");
  const slikar = document.getElementById("slikar");
  const imeSlike = document.getElementById("ime-slike");
  const tehnika = document.getElementById("tehnika");
  const dimenzije = document.getElementById("dimenzije");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  slikar.innerHTML = slides[slideIndex - 1].title;
  const arr = grids[slideIndex - 1].innerText.split("\n");
  imeSlike.innerHTML = arr[0];
  tehnika.innerHTML = arr[1].split(",")[0];
  dimenzije.innerHTML = arr[1].split(",")[1];
}
