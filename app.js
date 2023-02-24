"use strict";

const readMoreButtonAbout = document.querySelector(
  ".read__more--button--about"
);
const readMoreDivAbout = document.querySelector(".read__more--div--about");

readMoreButtonAbout.addEventListener("click", (e) => {
  readMoreDivAbout.classList.toggle("active");
  if (readMoreDivAbout.classList.contains("active")) {
    readMoreButtonAbout.innerHTML = `<button class="read__more--button--about">
        <img src= "/images/Arrow Up.png"></img>
    </button>`;
  } else
    readMoreButtonAbout.innerHTML = `<button class="read__more--button--about">Read more</button>`;
});
