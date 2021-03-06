import BASE_URL from './settings';
function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/${searchQuery}`).then(data => data.json());
}

export default fetchCountries;
