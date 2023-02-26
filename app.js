"use strict";

const readMoreButtonAbout = document.querySelector(
  ".read__more--button--about"
);
const readMoreDivAbout = document.querySelector(".read__more--div--about");
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

// Open More
readMoreButtonAbout.addEventListener("click", (e) => {
  readMoreDivAbout.classList.toggle("active");
  if (readMoreDivAbout.classList.contains("active")) {
    readMoreButtonAbout.innerHTML = `<button class="read__more--button--about">
        <img src= "/images/Arrow Up.png"></img>
    </button>`;
  } else
    readMoreButtonAbout.innerHTML = `<button class="read__more--button--about">Read more</button>`;
});
