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
};

export async function loadRecipe(id) {
  try {
    const url = `${API_BASE_URL}${id}?key=${API_KEY}`;

    const data = await getJSON(url);

    const { recipe } = data.data;
    state.recipe = {
      time: recipe.cooking_time,
      img: recipe.image_url,
      source: recipe.source_url,
      title: recipe.title,
      publisher: recipe.publisher,
      servings: recipe.servings,
      ingredients: recipe.ingredients,
    };
    console.log(recipe.ingredients);
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
