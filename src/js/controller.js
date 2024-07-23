import * as model from './model.js';

import recipeView from './viewJS/recipeView.js';
import searchView from './viewJS/searchView.js';
import resultsView from './viewJS/resultsView.js';
import paginationView from './viewJS/paginationView.js';
import bookmarkView from './viewJS/bookmarkView.js';
import { RES_PER_PAGE } from './config.js';
import addRecipeView from './viewJS/addRecipeView.js';

const controlRecipe = async function () {
  //1.loading the recipe

  const id = window.location.hash.slice(1);
  if (!id) return;
  try {
    recipeView.renderSpinner();

    bookmarkView.update(model.state.bookmarks);

    resultsView.update(model.getSearchPaged());

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
    const searchKey = searchView.getQuery();
    if (!searchKey) return;
    resultsView.renderSpinner();
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

const controlBookmarks = function () {
  // const recipeToBookmark = model.recipe.filter;
  model.alterBookmark();
  recipeView.update(model.state.recipe);
  bookmarkView.render(model.state.bookmarks);
  console.log(model.state.bookmarks);
};

const controlBookmarkLoader = function () {
  bookmarkView.render(model.state.bookmarks);
};

const controlForm = function (newRecipe) {
  console.log(newRecipe);
};

function init() {
  bookmarkView.addBookmarkLoader(controlBookmarkLoader);
  recipeView.renderEventHandler(controlRecipe);
  searchView.addHandlerSearch(controlSearch);
  paginationView.addHandlerClick(controlPagination);
  recipeView.addHandlerIngredients(controlServings);
  // resultsView.addHandlerClick();
  recipeView.addHandlerBookmark(controlBookmarks);
  addRecipeView.handleForm(controlForm);
}

init();
