"use strict";
function hardRefresh() {
  const t = parseInt(Date.now() / 10000); //10s tics
  const x = localStorage.getItem("t");
  localStorage.setItem("t", t);

  if (x != t) location.reload(true); //force page refresh from server
  else {
    //refreshed from server within 10s
    const a = document.querySelectorAll("a, link, script, img");
    var n = a.length;
    while (n--) {
      var tag = a[n];
      var url = new URL(tag.href || tag.src);
      url.searchParams.set("r", t.toString());
      tag.href = url.toString(); //a, link, ...
      tag.src = tag.href; //rerun script, refresh img
    }
  }
}

window.addEventListener("DOMContentLoaded", hardRefresh);
window.addEventListener("deviceorientation", hardRefresh, true);
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
