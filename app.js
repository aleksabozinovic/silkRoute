"use strict";
location.reload(true);

handleHardReload(window.location.href);
const burgerDiv = document.querySelector(".burger__div");
const closeBurger = document.querySelector(".close--burger__div");
const closeBurgerImg = document.querySelector(".close--burger__div img");
const navigationCol2 = document.querySelector(".nav--col--2");

// Open Navigation
burgerDiv.addEventListener("click", (e) => {
  navigationCol2.classList.add("active");
  closeBurger.classList.add("active");
});

closeBurgerImg.addEventListener("click", (e) => {
  navigationCol2.classList.remove("active");
  closeBurger.classList.remove("active");
});
