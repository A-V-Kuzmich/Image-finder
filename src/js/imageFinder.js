import { debounce } from 'debounce';
import { fetchImg } from './apiService.js';
import { observe } from './observer.js';
import { warning, clean, finish } from './error.js';
import refs from './refs';
import imgCardTpl from '../templates/imgCard.hbs';
import { cleanStorage, setStorage, getStorage } from './storage.js';

const { gallery, input } = refs;

let page = 1;
let qweryValue = '';

input.addEventListener('submit', e => {
  e.preventDefault();
  check(e.target[0].value);
  e.target[0].value = '';
});

function getImg(value) {
  fetchImg(value, page)
    .then(response => {
      if (response.hits.length === 0) {
        if (getStorage().length > 1) {
          return finish();
        }
        return warning();
      }
      renderTpl(response.hits);
    })
    .then(() => {
      page += 1;
    });
}
function renderTpl(imgCard) {
  setStorage(imgCard);
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
    cleanStorage();
    getImg(qweryValue);
  }
}
