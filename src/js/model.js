// import { async } from 'regenerator-runtime';
import { API_BASE_URL, API_KEY, RES_PER_PAGE } from './config.js';
import { API_KEY } from './config.js';
import { getJSON } from './helper.js';
export const state = {
  searchedResults: {
    query: '',
    results: [],
    pageNo: 1,
    resPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

const createRecipeObject = function (recipe) {
  return {
    time: +recipe.cooking_time,
    img: recipe.image_url,
    source: recipe.source_url,
    title: recipe.title,
    publisher: recipe.publisher,
    servings: recipe.servings,
    ingredients: recipe.ingredients,
    ...(recipe.id && { id: recipe.id }),
  };
};

export async function loadRecipe(id) {
  try {
    const url = `${API_BASE_URL}${id}?key=${API_KEY}`;

    const data = await getJSON(url);

    const { recipe } = data.data;

    state.recipe = createRecipeObject(recipe);

    state.bookmarks.some(bookmark => bookmark.id === id)
      ? (state.recipe.isBookMarked = true)
      : (state.recipe.isBookMarked = false);
    console.log(state.recipe);
  } catch (err) {
    throw err;
  }
}

export async function loadSearch(searchKey) {
  try {
    const url = `${API_BASE_URL}?search=${searchKey}&key=${API_KEY}`;
    const data = await getJSON(url);
    const { recipes } = data.data;
    state.searchedResults.pageNo = 1;
    state.searchedResults.results = recipes.map(record => {
      return {
        img: record.image_url,
        title: record.title,
        publisher: record.publisher,
        id: record.id,
      };
    });
  } catch (err) {
    throw err;
  }
}

export const getSearchPaged = function (page = state.searchedResults.pageNo) {
  state.searchedResults.pageNo = page;
  const start = (page - 1) * RES_PER_PAGE;
  const end = page * RES_PER_PAGE;

  return state.searchedResults.results.slice(start, end);
};

export const changeServings = function (servingOps) {
  if (state.recipe.servings === 1 && servingOps === '-') return;
  state.recipe.ingredients.forEach(ing => {
    if (!ing.quantity) return;
    const divider = ing.quantity / state.recipe.servings;
    if (servingOps === '+') {
      ing.quantity = (+ing.quantity + divider).toFixed(1);
    } else {
      ing.quantity = (+ing.quantity - divider).toFixed(1);
    }
  });
  if (servingOps === '+') state.recipe.servings += 1;
  else state.recipe.servings -= 1;
};

const alterLocalStorageBookmark = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const alterBookmark = function () {
  //for adding uploaded recipe to bookmarks
  if (!state.recipe.id) {
    state.bookmarks.unshift(state.recipe);
    alterLocalStorageBookmark();
    return;
  }
  state.recipe.isBookMarked = !state.recipe.isBookMarked;

  const id = window.location.hash.slice(1);

  //removing a bookmark
  if (!state.recipe.isBookMarked) {
    for (const [i, value] of state.bookmarks.entries()) {
      if (id === value.id) {
        state.bookmarks.splice(i, 1);
        alterLocalStorageBookmark();
      }
    }
    return;
  }

  const isThere = state.bookmarks.some(bookmark => {
    return id === bookmark.id;
  });

  //not adding bookmark if already present
  if (isThere) return;
  //adding the bookmark
  else {
    state.bookmarks.unshift(state.recipe);
    alterLocalStorageBookmark();
  }
};

export const addNewRecipe = function (recipe) {
  try {
    const ingredients = Object.entries(recipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].replaceAll(' ', '').split(',');
        if (ingArr.length !== 3)
          throw new Error(
            'Format for ingredient not correct. Please type defined format :)'
          );
        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const newRecipe = {
      cooking_time: +recipe.time,
      image_url: recipe.img,
      source_url: recipe.source,
      title: recipe.title,
      publisher: recipe.publisher,
      servings: +recipe.servings,
      ingredients,
      isBookMarked: true,
    };
    state.recipe = createRecipeObject(newRecipe);
  } catch (err) {
    throw err;
  }
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  // if (storage) state.bookmarks = storage;
  if (storage) state.bookmarks = JSON.parse(storage);
  console.log(JSON.parse(storage));
};

init();

const clearBookmark = function () {
  localStorage.removeItem('bookmarks');
};

clearBookmark();
