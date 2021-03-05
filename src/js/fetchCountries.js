import BASE_URL from './settings';
function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/${searchQuery}`).then(console.log);
}

export default fetchCountries;
