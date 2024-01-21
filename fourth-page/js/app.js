const btn = document.querySelector('.container__burger');
const nav = document.querySelector('.nav');

const toggleMenuAndTransformBtn = () => {
  nav.classList.toggle('nav__visible');
  btn.classList.toggle('change');
};
const handleResize = () => {
  if (window.innerWidth >= 700) {
    nav.classList.remove('nav__visible');
    btn.classList.remove('change');
  }
};

btn.addEventListener('click', toggleMenuAndTransformBtn);
window.addEventListener('resize', handleResize);
