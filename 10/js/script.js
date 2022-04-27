let headerMain = document.querySelector('.main-header__decoration');
let headerToggle = document.querySelector('.main-header__toggle');

headerMain.classList.remove('main-header__decoration--nojs');

headerToggle.addEventListener('click', function () {
  if (headerMain.classList.contains('main-header__decoration--closed')) {
    headerMain.classList.remove('main-header__decoration--closed');
    headerMain.classList.add('main-header__decoration--opened');
  } else {
    headerMain.classList.add('main-header__decoration--closed');
    headerMain.classList.remove('main-header__decoration--opened');
  }
});
