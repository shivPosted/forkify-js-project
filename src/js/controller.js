import * as model from './model.js';

import icons from 'url:../img/icons.svg';
console.log(icons);
const recipeContainer = document.querySelector('.recipe-detailed-info');
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2
//5b0f13db-34ac-41da-941f-76dbebc41504

const renderSpinner = function (elem) {
  elem.innerText = '';
  const html = `
                <div class="spinner">
        <svg class="spinner--icon">
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
      `;
  elem.insertAdjacentHTML('afterbegin', html);
};

///////////////////////////////////////
// const id = '664c8f193e7aa067e94e8706';
// const id = '664c8f193e7aa067e94e8610';
// const id = '664c8f193e7aa067e94e8534';

renderSpinner(recipeContainer);

const renderRecipe = async function (search) {
  //1.loading the recipe

  const apiKey = '5b0f13db-34ac-41da-941f-76dbebc41504';
  const id = window.location.hash.slice(1);
  if (!id) return;
  try {
    await model.loadRecipe(id);
    const { recipe } = model.state;
    // console.log(time, img, source, title, publisher, servings, ingredients);

    //2. rendering the recipe
    const ingredientList = recipe.ingredients.reduce((accum, elem) => {
      let unit, quantity;
      quantity = elem.quantity ? elem.quantity : '';
      unit = elem.unit ? elem.unit : '';
      return (accum += `<li class="ingredient--list--item">
                    <svg class="check--icon">
                      <use href="${icons}#icon-check"></use>
                    </svg>
                    <span>${quantity} ${unit} ${elem.description}</span>
                  </li>`);
    }, '');

    // console.log(ingredientList);
    const html = `<div class="recipe--overview">
              <figure>
                <img src=${recipe.img} alt="${recipe.title}" />
                <h1 class="recipe--title">
                  <span>${recipe.title}</span>
                </h1>
              </figure>
              <div class="recipe--overview--options">
                <div class="cooking--time">
                  <svg class="clock--icon">
                    <use href="${icons}#icon-clock"></use>
                  </svg>
                  <span>${recipe.time}</span> Minutes
                </div>
                <div class="serving--selector">
                  <svg class="user--icon">
                    <use href="${icons}#icon-users"></use>
                  </svg>
                  <span>${recipe.servings}</span> servings
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
                 ${ingredientList}
                </ul>
              </div>

              <div class="how-to-cook-section">
                <h4>HOW TO COOK</h4>
                <p>
                  This recipe was carefully designed and tested by
                 <span class="recipe-source-id">${recipe.publisher}</span>. Please
                  check out directions at their website.
                </p>
                <a href="${recipe.source}">
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
    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', html);
  } catch (err) {
    alert(err.message);
    console.error(err);
  }
};

['hashchange', 'load'].forEach(ev => {
  window.addEventListener(ev, renderRecipe);
});
