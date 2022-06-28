import { debounce } from 'debounce';
import { fetchImg } from './apiService.js';
import { observe } from './observer.js';
import { warning, clean } from './error.js';
import refs from './refs';
import imgCardTpl from '../templates/imgCard.hbs';

const { gallery, input } = refs;

let page = 1;
let qweryValue = '';

input.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.target[0].value);
  check(e.target[0].value);
  e.target[0].value = '';
});

function getImg(value) {
  fetchImg(value, page)
    .then(response => {
      console.log(response, page);
      if (response.hits.length === 0) {
        return warning();
      }
      renderTpl(response.hits);
    })
    .then(() => {
      page += 1;
    });
}
function renderTpl(imgCard) {
  console.log('before render', imgCard);
  gallery.insertAdjacentHTML('beforeend', imgCardTpl(imgCard));
  observe();
}
export function loadMore() {
  getImg(qweryValue);
}
function clearGallery() {
  page = 1;
  gallery.innerHTML = '';
}
function check(value) {
  qweryValue = value;
  clean();
  clearGallery();
  if (value.length < 0 || value.length === 0) {
    return warning();
  } else {
    console.log('start getImg', qweryValue);
    getImg(qweryValue);
  }
}
