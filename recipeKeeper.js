let recipeForm = document.getElementById("recipe-form");
let recipeName = document.getElementById("recipe-name");
let ingredients = document.getElementById("ingredients");
let steps = document.getElementById("steps");
let displayArea = document.getElementById("display-area");

let recipes = [];
recipeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Test");
  let enteredRecipeName = recipeName.value;
  let enteredIngredients = ingredients.value;
  let enteredSteps = steps.value;

  // create a new recipe
  let newRecipe = {
    name: enteredRecipeName,
    ingredients: enteredIngredients,
    steps: enteredSteps,
  };
  recipeName.value = "";
  ingredients.value = "";
  steps.value = "";

  console.log(newRecipe);

  // add the new recipe to the recipes array

  // We'll be adding more functionality here in the next steps.
});
