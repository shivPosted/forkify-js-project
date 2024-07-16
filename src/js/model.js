// import { async } from 'regenerator-runtime';
export const state = {
  apiKey: '5b0f13db-34ac-41da-941f-76dbebc41504',
};

export async function loadRecipe(id) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=${state.apiKey}`
    );
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message}`);

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
    alert(err);
  }
}
