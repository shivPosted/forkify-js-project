import View from './view.js';

class SearchView extends View {
  _parentElem = document.querySelector('.search');

  _clear() {
    this._parentElem.querySelector('.search-box').value = '';
  }

  getQuery() {
    const query = this._parentElem.querySelector('.search-box').value;
    this._clear();
    return query;
  }

  addHandlerSearch(handle) {
    this._parentElem.addEventListener('submit', function (e) {
      e.preventDefault();
      handle();
    });
  }
}

export default new SearchView();
