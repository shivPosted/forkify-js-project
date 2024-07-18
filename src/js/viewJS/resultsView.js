import View from './view.js';

class ResultsView extends View {
  _parentElem = document.querySelector('.search--items');
  _errorMsg = 'No recipe found for your query. Try changing the query.';

  _buildMarkup() {
    if (!this._data.length) {
      this.handleError(this._errorMsg);
      return '';
    }
    return this._data.reduce((accum, elem) => {
      return (accum += `<a href="#${elem.id}" class="preview--recipe">
      <div class="search---items---row">
      <div class="recipe-img-container">
      <img src="${elem.img}" class="recipe-img" alt="${elem.title} image" />
      </div>
      <div class="recipe---labels">
      <h3 class="recipe-id">${elem.title}</h3>
      <h5 class="recipe-source-id">${elem.publisher}</h5>
      </div>
      </div>
      </a>`);
    }, '');
  }
}

export default new ResultsView();
