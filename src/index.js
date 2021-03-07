import './styles.css';
import fetchCountries from '../src/js/fetchCountries';
import templateForOne from './templates/template-for-one.hbs';
import templateForAll from './templates/template-for-all.hbs';
const _ = require('lodash');
const inputRef = document.querySelector('#input-query');
const countriesListRef = document.querySelector('.countries__list');
inputRef.addEventListener('input', _.debounce(onInputDelay, 500));

function onInputDelay(event) {
  const currentValue = event.target.value;
  fetchCountries(currentValue);
  clearMarkup(currentValue);
}

// переделать!!
function clearMarkup(event) {
  if (event === '') {
    countriesListRef.textContent = '';
  }
}
