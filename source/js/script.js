let headerMain = document.querySelector(".main-header__wrapper");
let headerToggle = document.querySelector(".main-header__toggle");

headerMain.classList.remove("main-header__wrapper--nojs");
headerMain.classList.remove("main-header__wrapper--opened");
headerMain.classList.add("main-header__wrapper--closed");

headerToggle.addEventListener("click", function () {
  headerMain.classList.toggle("main-header__wrapper--closed");
  headerMain.classList.toggle("main-header__wrapper--opened");
});
