import icons from 'url:../../img/icons.svg';
export default class View {
  render(data) {
    this._data = data;
    this._clear();
    this._parentElem.insertAdjacentHTML('afterbegin', this._buildMarkup());
  }

  renderSpinner() {
    this._clear();
    const markUp = `
                    <div class="spinner">
            <svg class="spinner--icon">
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div>
          `;
    this._parentElem.insertAdjacentHTML('afterbegin', markUp);
  }

  _clear() {
    this._parentElem.innerHTML = '';
  }

  handleError(message = this._errorMsg) {
    this._clear();
    const markUp = `
    <div class="error-box">
            <svg class="error--icon">
              <use href="${icons}#icon-alert-triangle"></use>
            </svg>
            <p>${message}</p>
          </div>
    `;
    this._parentElem.insertAdjacentHTML('afterbegin', markUp);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._buildMarkup();
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElem = Array.from(newDOM.querySelectorAll('*'));
    const curEl = Array.from(this._parentElem.querySelectorAll('*'));

    newElem.forEach((newElem, i) => {
      const curElem = curEl[i];
      if (
        !newElem.isEqualNode(curElem) &&
        newElem.firstChild?.nodeValue &&
        newElem.firstChild?.nodeValue.trim() !== ''
      ) {
        curElem.textContent = newElem.textContent;
      }

      //updating attributes

      if (!newElem.isEqualNode(curElem)) {
        Array.from(newElem.attributes).forEach(attr => {
          curElem.setAttribute(attr.name, attr.value);
        });
      }
    });
  }
}
