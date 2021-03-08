import BASE_URL from './settings';
import { alert } from '../../node_modules/@pnotify/core/dist/PNotify';
import '@pnotify/core/dist/BrightTheme.css';

import { insertMarkup } from '../js/utils';
import templateForAll from '../templates/template-for-all.hbs';
import templateForOne from '../templates/template-for-one.hbs';
const countriesListRef = document.querySelector('.countries__list');

// Сделать рефакторинг
// Добавить стили
// Переделать инпут
function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/${searchQuery}`)
    .then(response => {
      if (response.status == '404' && searchQuery !== null)
        throw new Error('Не найдено');

      return response.json();
    })
    .then(data => {
      const markupAll = templateForAll(data);
      const markupOne = templateForOne(data);
      if (data.length > 1 && data.length < 10) {
        insertMarkup(countriesListRef, markupAll);
      } else if (data.length === 1) {
        insertMarkup(countriesListRef, markupOne);
      } else {
        alert({
          title: 'Error',
          text: 'Too many matches found. Please enter a more specific query!',
          type: 'error',
          delay: 2000,
        });
      }
    });
}

export default fetchCountries;
