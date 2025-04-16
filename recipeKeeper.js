let recipeForm = document.getElementById("recipe-form");
let recipeName = document.getElementById("recipe-name");
let ingredients = document.getElementById("ingredients");
let steps = document.getElementById("steps");
let displayArea = document.getElementById("display-area");

let recipes = [];
recipeForm.addEventListener("submit", function (event) {
  event.preventDefault();
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

  displayRecipe(newRecipe);
});

function displayRecipe(recipe) {
  // create a div for the new recipe
  let recipeDiv = document.createElement("div");
  console.log(recipe);
  recipeDiv.innerHTML += `<h1>${recipe.name}</h1> Ingredients:  ${recipe.ingredients}<p></p> Steps<p>${recipe.steps}</p>`;
  displayArea.appendChild(recipeDiv);
  displayArea.style.display = "block";
}
