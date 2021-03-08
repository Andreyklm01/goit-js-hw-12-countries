function insertMarkup(ref, value) {
  ref.insertAdjacentHTML('beforeend', value);
}
function clearMarkup(event, ref) {
  if (event === '') {
    ref.innerHTML = '';
  }
}

export { insertMarkup, clearMarkup };
