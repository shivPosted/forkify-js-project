// import View from "./view";

class AddRecipeView {
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
    });
  }
}

export default new AddRecipeView();
