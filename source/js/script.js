let headerMain = document.querySelector('.main-header__decoration');
let headerToggle = document.querySelector('.main-header__toggle');
let navMain = document.querySelector('.main-nav');


navMain.classList.remove('main-header__decoration--nojs');

headerToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-header__decoration--closed')) {
    navMain.classList.remove('main-header__decoration--closed');
    navMain.classList.add('main-header__decoration--opened');
  } else {
    navMain.classList.add('main-header__decoration--closed');
    navMain.classList.remove('main-header__decoration--opened');
  }
});
