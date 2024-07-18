import View from './view';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElem = document.querySelector('.pagination--section');

  _buildMarkup() {
    const totalPages = Math.ceil(
      this._data.results.length / this._data.resPerPage
    );

    const next = `<div class="page--no page--no--next" data-page-no="${
      this._data.pageNo + 1
    }">
      <span>Page${this._data.pageNo + 1}</span>
      <svg class="arrow--icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </div>`;
    const prev = `<div class="page--no page--no--prev" data-page-no="${
      this._data.pageNo - 1
    }">
      <svg class="arrow--icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page${this._data.pageNo - 1}</span>
    </div>`;
    // console.log(totalPages);
    //on page 1 and there are more pages
    if (totalPages > 1 && this._data.pageNo === 1) {
      return next;
    }
    //on page 1 and there are no pages
    else if (totalPages === 1) {
      return ``;
    }
    //on last page
    else if (this._data.pageNo === totalPages) {
      return prev;
    }
    //on other pages
    else {
      return prev + next;
    }
  }

  addHandlerClick(handle) {
    this._parentElem.addEventListener('click', e => {
      const target = e.target.closest('.page--no');
      if (!target) return;
      target.classList.contains('page--no--prev')
        ? (this._data.pageNo -= 1)
        : (this._data.pageNo += 1);
      handle();
    });
  }
}

export default new PaginationView();
