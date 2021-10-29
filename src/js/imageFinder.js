import { debounce } from "debounce";
import { fetchImg } from './apiService.js';
import imgCardTpl from '../templates/imgCard.hbs'

let page = 1;
const timeGet = 1000;

let qweryValue = '';

const gallery = document.querySelector('.gallery');
const input = document.querySelector('#search-form');
const button = document.querySelector('[data-action="add"]');


button.addEventListener('click', () => {
    loadMore();
});
input.addEventListener('input', debounce((e) => {
    qweryValue = e.target.value;
    getImg(qweryValue);
    resetPage();
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
    console.log(imgCard);
    gallery.insertAdjacentHTML('beforeend', imgCardTpl(imgCard));
};

function loadMore() {
        getImg(qweryValue);
};

function resetPage() {
    page = 1;
    gallery.innerHTML = '';
 };
