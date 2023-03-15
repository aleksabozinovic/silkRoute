const arrow = document.querySelector(".arrow");
const form = document.querySelector("form");
const buttonWrapper = document.querySelector(".button__wrapper button");

arrow.addEventListener("click", (e) => {
  form.classList.toggle("active");

  if (form.classList.contains("active"))
    arrow.innerHTML = `<img src="/images/Arrow up1.png" alt="arrow down" />`;
  else
    arrow.innerHTML = `<img src="/images/Arrow down1.png" alt="arrow down" />`;
});

buttonWrapper.addEventListener("click", (e) => {
  console.log(e);
  window.location.href("http://silkroute.lv//thankyou.html");
});
