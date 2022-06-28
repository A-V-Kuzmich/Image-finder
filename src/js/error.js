import allert from 'sweetalert';
import refs from './refs.js';

export function warning() {
  allert({
    title: `🤷 nothing found`,
    text: 'Please repeat your query or enter a more specific query',
    button: false,
    timer: 5000,
  });
}
export function error(status) {
  clean();
  allert({
    title: `${status} Oops`,
    text: 'Please try again later',
    button: false,
    className: 'error',
    timer: 2500,
  });
}
export function finish() {
  allert({
    title: `Oops, it's all`,
    text: 'You can look for something else',
    button: false,
    className: 'error',
    timer: 2000,
  });
}
export function clean() {
  refs.input.value = '';
}
