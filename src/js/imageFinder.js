import { debounce } from "debounce";
import { fetchImg } from './apiService.js';
import imgCardTpl from '../templates/imgCard.hbs'

const timeGet = 1000;
let page = 1;
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
function loadMore() {
        getImg(qweryValue);
};
function clearGallery() {
    page = 1;
    gallery.innerHTML = '';
};

    const config = {
    rootMargin: "0px",
    treshold: 0.5,
    };

const observer = new IntersectionObserver(observCallback, config);

function observCallback(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.nextElementSibling === null) {
            getImg(qweryValue);
        }
    })
    };

function observe() {
    const item = [...gallery.children];
    item.forEach((item) => observer.observe(item));
};