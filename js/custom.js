window.addEventListener("scroll", function () {
  const header = document.querySelector(".navbar");
  //   const logo = document.querySelector(".logo");
  //   const togle = document.querySelector(".tgl-switch");
  header.classList.toggle("black", window.scrollY > 400);
  //   logo.classList.toggle("black-logo", window.scrollY > 400);
  //   togle.classList.toggle("black-logo", window.scrollY > 400);
});
