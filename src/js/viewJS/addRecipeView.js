// import View from "./view";

class addRecipeView {
  _parentElem = document.querySelector('.add-recipe');

  addEventHandlerClick() {
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
        overlay = e.target.contains('.overlay');
      } else if (closePopUp || e.target === overlay) {
        recipeAdderPopUp.classList.add('hidden');
        overlay.classList.add('hidden');
      }
      // document.querySelector('.recipe-adder-pop-up').classList.remove('hidden');
      // document.querySelector('.overlay').classList.remove('hidden');
    });
  }
}

export default new addRecipeView();
