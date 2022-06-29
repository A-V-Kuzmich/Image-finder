import refs from './refs.js';
import { getStorage } from './storage.js';
const { gallery, backDrop, modalClose, modal, body, content, tags } = refs;
import modalTemplates from '../templates/modalTemplates.hbs';
import { check } from './imageFinder.js';

gallery.addEventListener('click', item => {
  open(item);
});

function open({ target }) {
  if (target.nodeName == 'IMG') {
    const idNumber = Number(target.id);
    const objEl = getStorage().find(({ id }) => id === idNumber);
    const tag = objEl.tags.split(',');
    content.insertAdjacentHTML('afterbegin', modalTemplates({ objEl, tag }));

    modalClose.addEventListener('click', closeModal);
    backDrop.addEventListener('click', closeModal);
    window.addEventListener('keydown', value => key(value));
    body.classList.add('no-scrol');
    modal.classList.add('is-open');
    const tags = document.querySelector('.tags');
    tags.addEventListener('click', e => getByTag(e));
  }
}

function getByTag({ target }) {
  if (target.className == 'modal__tags') {
    check(target.innerText);
  }
}

function key(value) {
  if (value.code === 'Escape') {
    closeModal();
  }
}

function closeModal() {
  modal.classList.remove('is-open');
  body.classList.remove('no-scrol');
  modalClose.removeEventListener('click', closeModal);
  backDrop.removeEventListener('click', closeModal);
  content.innerHTML = '';
}
