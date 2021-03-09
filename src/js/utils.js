import { alert } from '../../node_modules/@pnotify/core/dist/PNotify';

function insertMarkup(ref, value) {
  ref.insertAdjacentHTML('beforeend', value);
}
function clearMarkup(ref) {
  ref.innerHTML = '';
}
function errorAlert() {
  alert({
    title: 'Error',
    text: 'Too many matches found. Please enter a more specific query!',
    type: 'error',
    delay: 2000,
  });
}

function notFound() {
  alert({
    title: 'Error',
    text: 'Not Found',
    type: 'error',
    delay: 1000,
  });
}

export { insertMarkup, clearMarkup, errorAlert, notFound };
