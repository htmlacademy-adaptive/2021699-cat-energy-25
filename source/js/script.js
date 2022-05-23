let headerMain = document.querySelector('.main-header__wrapper');
let siteList = document.querySelector('.site-list');
let headerToggle = document.querySelector('.main-header__toggle');

headerMain.classList.remove('main-header__wrapper--nojs');
headerMain.classList.remove('main-header__wrapper--opened');
headerMain.classList.add('main-header__wrapper--closed');

siteList.classList.remove('site-list--nojs');
siteList.classList.remove('site-list--opened');
siteList.classList.add('site-list--closed');

headerToggle.addEventListener('click', function () {
  headerMain.classList.toggle('main-header__wrapper--closed');
  headerMain.classList.toggle('main-header__wrapper--opened');

  siteList.classList.toggle('site-list--closed');
  siteList.classList.toggle('site-list--opened');
});
