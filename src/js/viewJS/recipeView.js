import icons from 'url:../../img/icons.svg';
import { Fraction } from 'fractional';
console.log(Fraction);
class RecipeView {
  #data;
  #parentElem = document.querySelector('.recipe-detailed-info');
  #errorMsg = 'We could not find that recipe.Please try again 😢😢';

  render(data) {
    this.#data = data;
    this.#clear();
    this.#parentElem.insertAdjacentHTML('afterbegin', this.#buildMarkup());
  }

  renderSpinner() {
    this.#clear();
    const markUp = `
                    <div class="spinner">
            <svg class="spinner--icon">
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div>
          `;
    this.#parentElem.insertAdjacentHTML('afterbegin', markUp);
  }

  //getting rnder function from the controller which inturn is calling this mehtod
  renderEventHandler(render) {
    ['hashchange', 'load'].forEach(ev => {
      window.addEventListener(ev, render);
    });
  }

  handleError(message = this.#errorMsg) {
    this.#clear();
    const markUp = `
    <div class="error-box">
            <svg class="error--icon">
              <use href="${icons}#icon-alert-triangle"></use>
            </svg>
            <p>${message}</p>
          </div>
    `;
    this.#parentElem.insertAdjacentHTML('afterbegin', markUp);
  }
  #clear() {
    this.#parentElem.innerHTML = '';
  }

  #buildMarkup() {
    return `<div class="recipe--overview">
    <figure>
      <img src=${this.#data.img} alt="${this.#data.title}" />
      <h1 class="recipe--title">
        <span>${this.#data.title}</span>
      </h1>
    </figure>
    <div class="recipe--overview--options">
      <div class="cooking--time">
        <svg class="clock--icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span>${this.#data.time}</span> Minutes
      </div>
      <div class="serving--selector">
        <svg class="user--icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span>${this.#data.servings}</span> servings
        <svg class="minus--icon">
          <use href="${icons}#icon-minus-circle"></use>
        </svg>
        <svg class="plus--icon">
          <use href="${icons}#icon-plus-circle"></use>
        </svg>
      </div>
      <div class="bookmark--icon--container">
        <svg class="bookmark--icon">
          <use href="${icons}#icon-bookmark"></use>
        </svg>
      </div>
    </div>
    <div class="recipe-ingredient-list-container">
      <h4>RECIPE INGREDIENTS</h4>
      <ul class="ingredient--list">
       ${this.#generateMarkUpIngrdedients()}
      </ul>
    </div>

    <div class="how-to-cook-section">
      <h4>HOW TO COOK</h4>
      <p>
        This recipe was carefully designed and tested by
       <span class="recipe-source-id">${this.#data.publisher}</span>. Please
        check out directions at their website.
      </p>
      <a href="${this.#data.source}">
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

  #generateMarkUpIngrdedients() {
    return this.#data.ingredients.reduce((accum, elem) => {
      let unit, quantity;
      quantity = elem.quantity ? new Fraction(elem.quantity).toString() : '';
      unit = elem.unit ? elem.unit : '';
      return (accum += `<li class="ingredient--list--item">
                              <svg class="check--icon">
                                 <use href="${icons}#icon-check"></use>
                              </svg>
                               <span>${quantity} ${unit} ${elem.description}</span>
                             </li>`);
    }, '');
  }
}

export default new RecipeView();
