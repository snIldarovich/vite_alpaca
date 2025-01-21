import './scss/style.scss';

document.addEventListener('DOMContentLoaded', function() {
  const navBtn = document.querySelector('.header__nav-btn');
  const navList = document.querySelector('.nav__list');
  const page = document.querySelector('.page');

  navBtn.addEventListener('click', function() {
    navList.classList.toggle('open'); 
    page.classList.toggle('open'); 
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const dropmenuItems = document.querySelectorAll('.dropmenu > .nav__list-link, .dropmenu > .dropmenu__list-link');

  dropmenuItems.forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault(); 
      const parentItem = this.parentElement; 
      parentItem.classList.toggle('active'); 
    });
  });
});
