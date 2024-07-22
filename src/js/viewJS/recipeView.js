import icons from 'url:../../img/icons.svg';
import { Fraction } from 'fractional';
import View from './view.js';
// console.log(Fraction);
class RecipeView extends View {
  _data;
  _parentElem = document.querySelector('.recipe-detailed-info');
  _errorMsg = 'We could not find that recipe.Please try again 😢😢';

  //getting rnder function from the controller which inturn is calling this mehtod
  renderEventHandler(render) {
    ['hashchange', 'load'].forEach(ev => {
      window.addEventListener(ev, render);
    });
  }

  _buildMarkup() {
    return `<div class="recipe--overview">
    <figure>
      <img src=${this._data.img} alt="${this._data.title}" />
      <h1 class="recipe--title">
        <span>${this._data.title}</span>
      </h1>
    </figure>
    <div class="recipe--overview--options">
      <div class="cooking--time">
        <svg class="clock--icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span>${this._data.time}</span> Minutes
      </div>
      <div class="serving--selector">
        <svg class="user--icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span>${this._data.servings}</span> servings
        <svg class="minus--icon ing-updater" data-icon-op="-">
          <use href="${icons}#icon-minus-circle"></use>
        </svg>
        <svg class="plus--icon ing-updater" data-icon-op="+">
          <use href="${icons}#icon-plus-circle"></use>
        </svg>
      </div>
      <div class="bookmark--icon--container">
        <svg class="bookmark--icon">
          <use href="${icons}#icon-bookmark${
      this._data.isBookMarked ? '-fill' : ''
    }"></use>
        </svg>
      </div>
    </div>
    <div class="recipe-ingredient-list-container">
      <h4>RECIPE INGREDIENTS</h4>
      <ul class="ingredient--list">
       ${this._data.ingredients.reduce((accum, elem) => {
         let unit, quantity;
         quantity = elem.quantity ? new Fraction(elem.quantity).toString() : '';
         unit = elem.unit ? elem.unit : '';
         return (accum += `<li class="ingredient--list--item">
                                <svg class="check--icon">
                                   <use href="${icons}#icon-check"></use>
                                </svg>
                                 <span>${quantity} ${unit} ${elem.description}</span>
                               </li>`);
       }, '')}
      </ul>
    </div>

    <div class="how-to-cook-section">
      <h4>HOW TO COOK</h4>
      <p>
        This recipe was carefully designed and tested by
       <span class="recipe-source-id">${this._data.publisher}</span>. Please
        check out directions at their website.
      </p>
      <a href="${this._data.source}">
        <button class="btn go-to-btn">
          DIRECTIONS
          <svg class="arrow--icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      </a>
    </div>
  </div>
</div>`;
  }

  addHandlerIngredients(handle) {
    this._parentElem.addEventListener('click', function (e) {
      const target = e.target.closest('.ing-updater');
      if (!target) return;
      const operator = target.dataset.iconOp;
      handle(operator);
    });
  }

  addHandlerBookmark(handle) {
    this._parentElem
      // .querySelector('.recipe--overview--options')
      .addEventListener('click', function (e) {
        const target = e.target.closest('.bookmark--icon--container');
        if (!target) return;
        handle();
      });
  }
}

export default new RecipeView();
