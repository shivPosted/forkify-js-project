import View from './view';

class AddRecipeView extends View {
  _parentElem = document.querySelector('.recipe-form');

  constructor() {
    super();
    this._addEventHandlerClick();
    this.handleForm();
  }
  _addEventHandlerClick() {
    document.body.addEventListener('click', function (e) {
      const addRecipeBtn = e.target.closest('.add-recipe');
      const overlay = document.querySelector('.overlay');
      const recipeAdderPopUp = document.querySelector('.recipe-adder-pop-up');
      const closePopUp = e.target.closest('.close-pop-up');
      if (!(addRecipeBtn || overlay || closePopUp)) return;

      // console.log('clicked');
      if (addRecipeBtn) {
        recipeAdderPopUp.classList.remove('hidden');
        overlay.classList.remove('hidden');
      } else if (closePopUp || e.target === overlay) {
        recipeAdderPopUp.classList.add('hidden');
        overlay.classList.add('hidden');
      }
    });
  }
  handleForm(handle) {
    this._parentElem.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = [...new FormData(this)];
      const newRecipe = Object.fromEntries(data);
      handle(newRecipe);
    });
  }
}

export default new AddRecipeView();
