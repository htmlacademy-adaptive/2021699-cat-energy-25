let headerMain = document.querySelector('.main-header__decoration');
let headerToggle = document.querySelector('.main-header__toggle');
let navMain = document.querySelector('.main-nav');


headerMain.classList.remove('main-header__decoration--nojs');

headerToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-header__decoration--closed');
  navMain.classList.toggle('main-header__decoration--opened');
});
