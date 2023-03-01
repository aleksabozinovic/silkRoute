const rec1 = document.querySelector(".rec1");
const rec2 = document.querySelector(".rec2");
const rec3 = document.querySelector(".rec3");
const rec4 = document.querySelector(".rec4");
const recAll = document.querySelectorAll(".div__rec svg rect");
const leftArrow = document.querySelector(".left--arrow");
const rightArrow = document.querySelector(".right--arrow");
const slide1 = document.querySelector(".slide--1");
const slide2 = document.querySelector(".slide--2");
const slide3 = document.querySelector(".slide--3");
const slide4 = document.querySelector(".slide--4");

let imgNum = 0;

const firstSlide = () => {
  leftArrow.querySelector("#prvi__path").style.fill = "#39FF14";
  leftArrow.querySelector("#drugi__path").style.stroke = "#39FF14";
  rightArrow.querySelector("#prvi__path").style.fill = "#39FF14";
  rightArrow.querySelector("#drugi__path").style.stroke = "#39FF14";
  rec1.style.fill = "#39FF14";
  rec2.style.fill = "none";
  rec3.style.fill = "none";
  rec4.style.fill = "none";

  slide1.style.transform = "translateX(0)";
  slide2.style.transform = "translateX(100%)";
  slide3.style.transform = "translateX(200%)";
  slide4.style.transform = "translateX(300%)";

  recAll.forEach((el) => {
    el.style.stroke = "#39FF14";
  });
  imgNum = 0;
};

const secondSlide = () => {
  leftArrow.querySelector("#prvi__path").style.fill = "#FF0F7A";
  leftArrow.querySelector("#drugi__path").style.stroke = "#FF0F7A";
  rightArrow.querySelector("#prvi__path").style.fill = "#FF0F7A";
  rightArrow.querySelector("#drugi__path").style.stroke = "#FF0F7A";
  rec1.style.fill = "none";
  rec2.style.fill = "#FF0F7A";
  rec3.style.fill = "none";
  rec4.style.fill = "none";

  slide1.style.transform = "translateX(-100%)";
  slide2.style.transform = "translateX(0)";
  slide3.style.transform = "translateX(100%)";
  slide4.style.transform = "translateX(200%)";

  recAll.forEach((el) => {
    el.style.stroke = "#FF0F7A";
  });
  imgNum = 1;
};
const thirdSlide = () => {
  leftArrow.querySelector("#prvi__path").style.fill = "#FCFE00";
  leftArrow.querySelector("#drugi__path").style.stroke = "#FCFE00";
  rightArrow.querySelector("#prvi__path").style.fill = "#FCFE00";
  rightArrow.querySelector("#drugi__path").style.stroke = "#FCFE00";
  rec1.style.fill = "none";
  rec2.style.fill = "none";
  rec3.style.fill = "#FCFE00";
  rec4.style.fill = "none";

  slide1.style.transform = "translateX(-200%)";
  slide2.style.transform = "translateX(-100%)";
  slide3.style.transform = "translateX(00%)";
  slide4.style.transform = "translateX(100%)";

  recAll.forEach((el) => {
    el.style.stroke = "#FCFE00";
  });
  imgNum = 2;
};
const fourthSlide = () => {
  leftArrow.querySelector("#prvi__path").style.fill = "#5501EE";
  leftArrow.querySelector("#drugi__path").style.stroke = "#5501EE";
  rightArrow.querySelector("#prvi__path").style.fill = "#5501EE";
  rightArrow.querySelector("#drugi__path").style.stroke = "#5501EE";
  rec1.style.fill = "none";
  rec2.style.fill = "none";
  rec3.style.fill = "none";
  rec4.style.fill = "#5501EE";

  slide1.style.transform = "translateX(-300%)";
  slide2.style.transform = "translateX(-200%)";
  slide3.style.transform = "translateX(-100%)";
  slide4.style.transform = "translateX(0%)";

  recAll.forEach((el) => {
    el.style.stroke = "#5501EE";
  });
  imgNum = 3;
};

rightArrow.addEventListener("click", () => {
  imgNum++;
  if (imgNum === 0) firstSlide();
  if (imgNum === 1) secondSlide();
  if (imgNum === 2) thirdSlide();
  if (imgNum === 3) fourthSlide();
  if (imgNum === 4) {
    imgNum = 0;
    firstSlide();
  }
});
leftArrow.addEventListener("click", () => {
  imgNum--;
  if (imgNum === 0) firstSlide();
  if (imgNum === 1) secondSlide();
  if (imgNum === 2) thirdSlide();
  // if (imgNum === 3) fourthSlide();
  if (imgNum === -1) {
    imgNum = 3;
    fourthSlide();
  }
});

rec1.addEventListener("click", (e) => {
  firstSlide();
});

rec2.addEventListener("click", (e) => {
  secondSlide();
});

rec3.addEventListener("click", (e) => {
  thirdSlide();
});

rec4.addEventListener("click", (e) => {
  fourthSlide();
});
