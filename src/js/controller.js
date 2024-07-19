import * as model from './model.js';

import recipeView from './viewJS/recipeView.js';
import searchView from './viewJS/searchView.js';
import resultsView from './viewJS/resultsView.js';
import paginationView from './viewJS/paginationView.js';
const elem = document.querySelector('.recipe-detailed-info');

import { RES_PER_PAGE } from './config.js';

const controlRecipe = async function () {
  //1.loading the recipe

  const id = window.location.hash.slice(1);
  if (!id) return;
  try {
    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);

    //2. rendering the recipe
  } catch (err) {
    console.log(err);
    recipeView.handleError();
  }
};

const controlSearch = async function () {
  try {
    resultsView.renderSpinner();
    const searchKey = searchView.getQuery();
    if (!searchKey) return;
    await model.loadSearch(searchKey);

    resultsView.render(model.getSearchPaged());

    paginationView.render(model.state.searchedResults);
  } catch (err) {
    console.log(err);
    resultsView.handleError();
  }
};

const controlPagination = function (page) {
  resultsView.render(model.getSearchPaged(page));
  paginationView.render(model.state.searchedResults);
};

const controlServings = function (operator) {
  model.changeServings(operator);
  // ingredientsView.render(model.state.recipe.ingredients);
  recipeView.update(model.state.recipe);
};

function init() {
  recipeView.renderEventHandler(controlRecipe);
  searchView.addHandlerSearch(controlSearch);
  paginationView.addHandlerClick(controlPagination);
  recipeView.addHandlerIngredients(controlServings);
}

init();
