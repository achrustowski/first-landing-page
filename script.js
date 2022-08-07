const primaryNav = document.getElementById("primary-nav");
const mobileNavTriangle = document.getElementById("mobile-triangle");

const hamburgerMenu = document.getElementById("hamburger-menu");
const hamburgerLineTop = document.getElementById("top");
const hamburgerLineMiddle = document.getElementById("middle");
const hamburgerLineBottom = document.getElementById("bottom");

hamburgerMenu.addEventListener("click", function () {
  console.log("Hello");
  primaryNav.classList.toggle("hidden");
  mobileNavTriangle.classList.toggle("hidden");
  hamburgerLineTop.classList.toggle("rotate-top");
  hamburgerLineMiddle.classList.toggle("rotate-middle");
  hamburgerLineBottom.classList.toggle("rotate-bottom");
});
