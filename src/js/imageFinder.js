import { debounce } from "debounce";
import { fetchImg } from './apiService.js';
import { observe } from './observer.js';
import refs from './refs';
import imgCardTpl from '../templates/imgCard.hbs'

const {gallery, input} = refs;

const timeGet = 1000;
let page = 1;
let qweryValue = '';

input.addEventListener('input', debounce((e) => {
    qweryValue = e.target.value;
    getImg(qweryValue);
    clearGallery();
}, timeGet));

function getImg(value) {
    fetchImg(value, page)
    .then(response => {
            console.log(response, page);
            renderTpl(response.hits);
        })
        .then(()=>{page+=1});      
};
function renderTpl(imgCard) {
    gallery.insertAdjacentHTML('beforeend', imgCardTpl(imgCard));
    observe();
};
export function loadMore() {
    getImg(qweryValue);
};
function clearGallery() {
    page = 1;
    gallery.innerHTML = '';
};

function check(value) {
    if (value === ) { };
}