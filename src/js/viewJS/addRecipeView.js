import { TIME_OUT_SEC } from '../config';
import View from './view';
import icons from '../../img/icons.svg';

class AddRecipeView extends View {
  _parentElem = document.querySelector('.recipe-adder-pop-up');
  _overlay = document.querySelector('.overlay');
  _recipeAdderPopUp = document.querySelector('.recipe-adder-pop-up');

  constructor() {
    super();
    this._addEventHandlerClick();
    // this.handleForm();
  }

  closePopUp() {
    this._overlay.classList.add('hidden');
    this._recipeAdderPopUp.classList.add('hidden');
    this.render();
  }

  _addEventHandlerClick() {
    document.body.addEventListener('click', e => {
      const addRecipeBtn = e.target.closest('.add-recipe');
      const closePopUp = e.target.closest('.close-pop-up');
      if (!(addRecipeBtn || this._overlay || closePopUp)) return;

      if (addRecipeBtn) {
        this._recipeAdderPopUp.classList.remove('hidden');
        this._overlay.classList.remove('hidden');
      } else if (closePopUp || e.target === this._overlay) {
        this._recipeAdderPopUp.classList.add('hidden');
        this._overlay.classList.add('hidden');
      }
    });
  }

  _buildMarkup() {
    return `<button class="close-pop-up">&times;</button>
      <form class="recipe-form">
        <div class="upload-column upload-column-1">
          <h6>RECIPE DATA</h6>
          <label for="title-recipe">Title</label>
          <input type="text" id="title-recipe" value="title" name="title" />
          <label for="url-recipe">URL</label>
          <input type="text" id="url-recipe" name="source" />
          <label for="image-url-recipe">Image url</label>
          <input type="text" id="image-url-recipe" name="img" />
          <label for="publisher-recipe">Publisher</label>
          <input type="text" id="publisher-recipe" name="publisher" />
          <label for="prep-time">PrepTime</label>
          <input type="number" id="prep-time" name="time" />
          <label for="serving-recipe">Servings</label>
          <input type="number" id="serving-recipe" name="servings" />
        </div>
        <div class="upload-column upload-column-2">
          <h6>INGREDIENTS</h6>
          <label for="ingredient-1-recipe">Ingredient 1</label>
          <input type="text" id="ingredient-1-recipe" name="ingredient-1" placeholder="Format: qty,unit,ingredient" value="1.5,kg,flour" />
          <label for="ingredient-2-recipe">Ingredient 2</label>
          <input type="text" id="ingredient-2-recipe" name="ingredient-2" placeholder="Format: qty,unit,ingredient" />
          <label for="ingredient-3-recipe">Ingredient 3</label>
          <input type="text" id="ingredient-3-recipe" name="ingredient-3" placeholder="Format: qty,unit,ingredient" />
          <label for="ingredient-4-recipe">Ingredient 4</label>
          <input type="text" id="ingredient-4-recipe" name="ingredient-4" placeholder="Format: qty,unit,ingredient" />
          <label for="ingredient-5-recipe">Ingredient 5</label>
          <input type="text" id="ingredient-5-recipe" name="ingredient-5" placeholder="Format: qty,unit,ingredient" />
          <label for="ingredient-6-recipe">Ingredient 6</label>
          <input type="text" id="ingredient-6-recipe" name="ingredient-6" placeholder="Format: qty,unit,ingredient" />
        </div>
        <button class="upload-recipe-btn">
          <svg class="upload--icon">
            <use href="${icons}#icon-upload-cloud"></use>
          </svg>
          <span>UPLOAD</span>
        </button>
      </form>`;
  }

  handleForm(handle) {
    document
      .querySelector('.recipe-form')
      .addEventListener('submit', function (e) {
        e.preventDefault();
        const data = [...new FormData(this)];
        const newRecipe = Object.fromEntries(data);
        handle(newRecipe);
      });
  }
}

export default new AddRecipeView();
