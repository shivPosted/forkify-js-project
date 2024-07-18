import * as model from './model.js';

import recipeView from './viewJS/recipeView.js';
import searchView from './viewJS/searchView.js';
import resultsView from './viewJS/resultsView.js';
import paginationView from './viewJS/paginationView.js';
import { RES_PER_PAGE } from './config.js';

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

const getSearchPaged = function (page = model.state.searchedResults.pageNo) {
  model.state.searchedResults.pageNo = page;
  const start = (page - 1) * RES_PER_PAGE;
  const end = page * RES_PER_PAGE;

  return model.state.searchedResults.results.slice(start, end);
};

const controlSearch = async function () {
  try {
    resultsView.renderSpinner();
    const searchKey = searchView.getQuery();
    if (!searchKey) return;
    await model.loadSearch(searchKey);

    resultsView.render(getSearchPaged());

    paginationView.render(model.state.searchedResults);
  } catch (err) {
    console.log(err);
    resultsView.handleError();
  }
};

const controlPagination = function () {
  paginationView.render(model.state.searchedResults);
  resultsView.render(getSearchPaged(paginationView._data.pageNo));
};

function init() {
  recipeView.renderEventHandler(controlRecipe);
  searchView.addHandlerSearch(controlSearch);
  paginationView.addHandlerClick(controlPagination);
}

init();
