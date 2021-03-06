import './styles.css';
import fetchCountries from '../src/js/fetchCountries';
import templateForOne from './templates/template-for-one.hbs';
import templateForAll from './templates/template-for-all.hbs';
const _ = require('lodash');
const inputRef = document.querySelector('#input-query');
inputRef.addEventListener('input', _.debounce(onInputDelay, 500));

function onInputDelay(event) {
  const currentValue = event.target.value;
  fetchCountries(currentValue);
}

//рендер запроса:
//Name
//Capital
//Population
//[languages:name]
//flag:link
