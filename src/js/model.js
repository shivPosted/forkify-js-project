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
  } catch (err) {
    throw err;
  }
}

export async function loadSearch(searchKey) {
  try {
    const url = `${API_BASE_URL}?search=${searchKey}&key=${API_KEY}`;
    const data = await getJSON(url);
    const { recipes } = data.data;
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
