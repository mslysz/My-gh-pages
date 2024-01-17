const burgerBtn = document.querySelector('.menu__burger');
const closeBtn = document.querySelector('.menu__onoff-icon');
const burgerMenu = document.querySelector('.menu__onoff');

const toggleMenu = () => {
  burgerMenu.classList.toggle('menu__active');
  if (burgerMenu.classList.contains('menu__active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};

burgerBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
