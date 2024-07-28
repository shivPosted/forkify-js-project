import View from './view';
import icons from '../../img/icons.svg';

class BookmarkView extends View {
  _parentElem = document.querySelector('.bookmarks--section');

  constructor() {
    super();
    this._addHandlerMouse();
  }
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

  addBookmarkLoader(handle) {
    window.addEventListener('load', handle);
  }

  _addHandlerMouse() {
    ['mouseenter', 'mouseleave'].forEach(ev => {
      if (ev === 'mouseleave') {
        this._parentElem.addEventListener(ev, function () {
          this.classList.add('hidden');
        });
        document.querySelector('.add-bookmark').addEventListener(ev, () => {
          this._parentElem.classList.add('hidden');
        });
      } else if (ev === 'mouseenter') {
        this._parentElem.addEventListener(ev, function () {
          this.classList.remove('hidden');
        });
        document.querySelector('.add-bookmark').addEventListener(ev, () => {
          this._parentElem.classList.remove('hidden');
        });
      }
    });
  }
}

export default new BookmarkView();
