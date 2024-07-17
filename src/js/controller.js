import * as model from './model.js';

import recipeView from './viewJS/recipeView.js';
import searchView from './viewJS/searchView.js';

const serchBtn = document.querySelector('.search-btn');

const controlRecipe = async function () {
  //1.loading the recipe

  const id = window.location.hash.slice(1);
  if (!id) return;
  try {
    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
    // console.log(time, img, source, title, publisher, servings, ingredients);

    //2. rendering the recipe

    // console.log(ingredientList);
  } catch (err) {
    console.log(err);
    recipeView.handleError();
  }
};

const controlSearch = async function () {
  try {
    const searchKey = searchView.getQuery();
    if (!searchKey) return;
    await model.loadSearch(searchKey);
    console.log(model.state.searchedResults.results);
  } catch (err) {
    console.log(err);
  }
};

function init() {
  recipeView.renderEventHandler(controlRecipe);
  searchView.addHandlerSearch(controlSearch);
}

init();
