import * as model from './model.js';

import recipeView from './viewJS/recipeView.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2
//5b0f13db-34ac-41da-941f-76dbebc41504

///////////////////////////////////////
// const id = '664c8f193e7aa067e94e8706';
// const id = '664c8f193e7aa067e94e8610';
// const id = '664c8f193e7aa067e94e8534';

const renderRecipe = async function () {
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
    alert(err.message);
    console.error(err);
  }
};

['hashchange', 'load'].forEach(ev => {
  window.addEventListener(ev, renderRecipe);
});
