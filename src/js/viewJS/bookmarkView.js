import View from './view';
import icons from 'url:../../img/icons.svg';

class BookmarkView extends View {
  _parentElem = document.querySelector('.bookmarks--section');

  _buildMarkup() {
    if (this._data.length === 0)
      return `<svg class="bookmark--icon ">
              <use href="${icons}#icon-alert-circle"></use>
            </svg>
            <p>
              No bookmarks yet. Find a nice recipe and bookmark it ;)
            </p>`;
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

  addHandlerMouseOver() {
    document
      .querySelector('.add-bookmark')
      .addEventListener('mouseenter', e => {
        this._parentElem.classList.remove('hidden');
      });
  }

  addHandlerMouseLeave() {
    document
      .querySelector('.main-container')
      .addEventListener('mouseleave', e => {
        this._parentElem.classList.add('hidden');
      });
  }

  addHandlerClick() {}
}

export default new BookmarkView();
