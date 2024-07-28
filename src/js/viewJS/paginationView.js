import View from './view';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElem = document.querySelector('.pagination--section');

  _buildMarkup() {
    const totalPages = Math.ceil(
      this._data.results.length / this._data.resPerPage
    );

    const next = `<div class="page--no page--no--next" data-page-no="${
      this._data.pageNo + 1
    }">
      <span>Page ${this._data.pageNo + 1}</span>
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
      <span>Page ${this._data.pageNo - 1}</span>
    </div>`;
    const pageInfo = ` <div class="on-what-page">
            <span class="current-page">${this._data.pageNo} </span> /
            <div class="total-page"> ${totalPages}</div>
          </div>`;
    //on page 1 and there are more pages
    if (totalPages > 1 && this._data.pageNo === 1) {
      return pageInfo + next;
    }
    //on page 1 and there are no pages
    else if (totalPages === 1) {
      return ``;
    }
    //on last page
    else if (this._data.pageNo === totalPages) {
      return prev + pageInfo;
    }
    //on other pages
    else {
      return prev + pageInfo + next;
    }
  }

  addHandlerClick(handle) {
    this._parentElem.addEventListener('click', e => {
      const target = e.target.closest('.page--no');
      if (!target) return;
      const page = +target.dataset.pageNo;

      handle(page);
      document
        .querySelector('.main-container')
        .scrollIntoView({ behavior: 'smooth' });
    });
  }
}

export default new PaginationView();
