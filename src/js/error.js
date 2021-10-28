
import allert from 'sweetalert'
// обработчики ошибок
 function warning(value) {
  allert({
    title: `🕵${value} was found`,
    text: "Too many matches found. Please enter a more specific query",
    button: false,
    timer: 5000
  })
}
export function error(status) {
    clean();
    allert({
        title: `${status} Oops`,
        text: "Nothing is found",
        button: false,
        className: "error",
        timer: 2500
    });
}