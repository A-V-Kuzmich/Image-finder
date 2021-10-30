import refs from './refs.js';
const { gallery, backDrop, img, modalClose, modal, body } = refs;

//Открытие модального окна
gallery.addEventListener('click', (item) => {
    open(item)
});
//функция открытия модалки
function open (el) {
  if (el.target.nodeName == 'IMG') {
  modal.classList.add('is-open');
  body.classList.add('no-scrol');
  img.src = el.target.dataset.src;
  img.alt = el.target.alt;
  //закрытие по Х
  modalClose.addEventListener('click', closeModal);
  //закрытие при клике в "молоко"
  backDrop.addEventListener('click', closeModal);
  //Управление клавишами
  window.addEventListener('keydown', (value) =>  key(value));
}};
//Функция нажатия клавиш
function key(value) {
  	if (value.code === 'Escape') {
		closeModal(modal);
  };
};
//функция закрытия модального окна
function closeModal() {
    modal.classList.remove('is-open');
    body.classList.remove('no-scrol');
      img.src = "";
  img.alt = "";
  //закрытие по Х
  modalClose.removeEventListener('click', closeModal);
  //закрытие при клике в "молоко"
  backDrop.removeEventListener('click', closeModal);
};