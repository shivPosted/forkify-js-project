class SearchView {
  #parentElem = document.querySelector('.search');

  #clear() {
    this.#parentElem.querySelector('.search-box').value = '';
  }

  getQuery() {
    const query = this.#parentElem.querySelector('.search-box').value;
    this.#clear();
    return query;
  }

  addHandlerSearch(handle) {
    this.#parentElem.addEventListener('submit', function (e) {
      e.preventDefault();
      handle();
    });

    //   this.#parentElem
    //     .querySelector('.search-box')
    //     .addEventListener('click', function () {});
  }
}

export default new SearchView();
