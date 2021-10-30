import allert from 'sweetalert'
import refs from './refs.js'

export function warning(value) {
  allert({
    title: `🕵${value} was found`,
    text: "Too many matches found. Please enter a more specific query",
    button: false,
    timer: 5000
  })
};
export function error(status) {
  clean();
  allert({
    title: `${status} Oops`,
    text: "Nothing is found",
    button: false,
    className: "error",
    timer: 2500
  });
};
export function clean() {
    refs.input.value = '';
};