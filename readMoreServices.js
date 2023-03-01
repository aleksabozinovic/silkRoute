const readMoreButtonServices = document.querySelector(
  ".read__more--yellow--button"
);

const readMoreDiv = document.querySelector(".read__more--div--services");

const readMoreButtonServicesGreen = document.querySelector(
  ".read__more--green--button"
);

const readMoreDiv2 = document.querySelector(".read__more--div--services2");

readMoreButtonServices.addEventListener("click", () => {
  readMoreDiv.classList.toggle("active");
  if (readMoreDiv.classList.contains("active")) {
    readMoreButtonServices.innerHTML = `<img
    src="/images/Arrow Up.png"
    alt="arrow up"
  />`;
  } else {
    readMoreButtonServices.innerHTML = `<img
  src="/images/Arrow Down--yellow.png"
  alt="arrow down"
/>`;
  }
});

readMoreButtonServicesGreen.addEventListener("click", () => {
  readMoreDiv2.classList.toggle("active");
  if (readMoreDiv2.classList.contains("active")) {
    readMoreButtonServicesGreen.innerHTML = `<img
    src="/images/Arrow1 Up.png"
    alt="arrow up"
  />`;
  } else {
    readMoreButtonServicesGreen.innerHTML = `<img
  src="/images/Arrow1 Down.png"
  alt="arrow down"
/>`;
  }
});
