import BASE_URL from './settings';

export default function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/${searchQuery}`).then(response => {
    if (response.status == '404') throw new Error('Not Found');

    return response.json();
  });
}
