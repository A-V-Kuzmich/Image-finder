import refs from "./refs.js";
import {loadMore} from './imageFinder.js';

const config = {
    rootMargin: "0px",
    treshold: 0.5,
};
const observer = new IntersectionObserver(observCallback, config);
function observCallback(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.nextElementSibling === null) {
            loadMore();
        };
    })
};
export function observe() {
    const item = [...refs.gallery.children];
    item.forEach((item) => observer.observe(item));
};