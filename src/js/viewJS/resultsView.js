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
      const hash = window.location.hash.slice(1);
      return (accum += `<a href="#${elem.id}" class="preview--recipe">
      <div class="search---items---row ${hash === elem.id ? 'selected' : ''}">
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

  // addHandlerClick() {
  //   this._parentElem.addEventListener('click', function (e) {
  //     const target = e.target.closest('.search---items---row');
  //     if (!target) return;
  //     this.querySelectorAll('.search---items---row').forEach(element => {
  //       element.classList.remove('selected');
  //     });

  //     target.classList.add('selected');
  //   });
  // }
}

export default new ResultsView();
