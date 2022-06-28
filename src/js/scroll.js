import refs from './refs.js';
const { backToTop } = refs;

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
window.addEventListener('scroll', () => {
  if (window.pageYOffset >= 500) {
    backToTop.classList.remove('visually-hidden');
  } else {
    backToTop.classList.add('visually-hidden');
  }
});

$('.round').click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('.arrow').toggleClass('bounceAlpha');
});
