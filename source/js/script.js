let headerMain = document.querySelector('.main-header__decoration');
let headerToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-nav--nojs');

headerToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
