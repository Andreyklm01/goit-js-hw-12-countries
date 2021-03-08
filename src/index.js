import './styles.css';
import fetchCountries from '../src/js/fetchCountries';
import { clearMarkup } from './js/utils';
const _ = require('lodash');
const inputRef = document.querySelector('#input-query');

const countriesListRef = document.querySelector('.countries__list');
inputRef.addEventListener('input', _.debounce(onInputDelay, 500));
function onInputDelay(event) {
  const currentValue = event.target.value;
  fetchCountries(currentValue);
  clearMarkup(currentValue, countriesListRef);
}
