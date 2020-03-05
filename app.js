const theme = document.querySelector(".theme-switch");
const body = document.querySelector("body");
theme.addEventListener("click", () => body.classList.toggle("light-theme"));
