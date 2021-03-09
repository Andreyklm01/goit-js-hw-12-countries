import fetchCountries from './fetchCountries';
import '@pnotify/core/dist/BrightTheme.css';
import { clearMarkup, insertMarkup, errorAlert, notFound } from '../js/utils';
import templateForAll from '../templates/template-for-all.hbs';
import templateForOne from '../templates/template-for-one.hbs';
const _ = require('lodash');

const inputRef = document.querySelector('#input-query');
const countriesListRef = document.querySelector('.countries__list');
const countryDescRef = document.querySelector('.country__descr');

inputRef.addEventListener('input', _.debounce(handleInput, 500));

function handleInput(event) {
  clearMarkup(countriesListRef);
  clearMarkup(countryDescRef);

  const currentValue = event.target.value;
  fetchCountries(currentValue)
    .then(data => {
      if (data.length >= 2 && data.length <= 10) {
        insertMarkup(countriesListRef, templateForAll(data));
      }
      if (data.length === 1) {
        insertMarkup(countryDescRef, templateForOne(data));
      }
      if (data.length > 10) {
        errorAlert();
      }
    })
    .catch(notFound);
}

export default handleInput;
