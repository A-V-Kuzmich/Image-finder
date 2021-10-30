import { debounce } from "debounce";
import { fetchImg } from './apiService.js';
import { observe } from './observer.js';
import {warning, clean} from './error.js';
import refs from './refs';
import imgCardTpl from '../templates/imgCard.hbs'

const {gallery, input} = refs;

const timeGet = 2000;
let page = 1;
let qweryValue = '';


input.addEventListener('input', debounce((e) => check(e.target.value.trim()), timeGet));

input.addEventListener('submit', (e) => {
    e.preventDefault();
    check(e.target.value.trim());
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
    qweryValue = value;
    clean();
    clearGallery();
    if (value.length < 0 || value.length === 0) {
    return warning();
    } else {
       getImg(qweryValue); 
    }
};