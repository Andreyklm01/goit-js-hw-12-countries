import BASE_URL from './settings';
import templateForAll from '../templates/template-for-all.hbs';
import templateForOne from '../templates/template-for-one.hbs';
const countriesListRef = document.querySelector('.countries__list');

//!!
// Сделать рефакторинг
// Вінести функции
// Переделать очистку инпута
// прикрутить нотификашки
//!!

function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/${searchQuery}`)
    .then(response => {
      if (response.status == '404') throw new Error('Не найдено');

      return response.json();
    })
    .then(data => {
      const markupAll = templateForAll(data);
      const markupOne = templateForOne(data);
      if (data.length > 1 && data.length < 10) {
        insertMarkup(markupAll, countriesListRef);
      }
      if (data.length === 1) {
        insertMarkup(markupOne, countriesListRef);
      }
    });
}
function insertMarkup(value, ref) {
  ref.insertAdjacentHTML('beforeend', value);
}

export default fetchCountries;
