import refs from './refs.js';
import { getStorage } from './storage.js';
const { gallery, backDrop, modalClose, modal, body, content } = refs;
import modalTemplates from '../templates/modalTemplates.hbs';

gallery.addEventListener('click', item => {
  open(item);
});

function open(el) {
  if (el.target.nodeName == 'IMG') {
    const idNumber = Number(el.target.id);
    const objEl = getStorage().find(o => o.id === idNumber);
    content.insertAdjacentHTML('afterbegin', modalTemplates(objEl));

    modal.classList.add('is-open');
    body.classList.add('no-scrol');

    modalClose.addEventListener('click', closeModal);
    backDrop.addEventListener('click', closeModal);
    window.addEventListener('keydown', value => key(value));
  }
}

function key(value) {
  if (value.code === 'Escape') {
    closeModal(modal);
  }
}

function closeModal() {
  modal.classList.remove('is-open');
  body.classList.remove('no-scrol');
  modalClose.removeEventListener('click', closeModal);
  backDrop.removeEventListener('click', closeModal);
  content.innerHTML = '';
}
