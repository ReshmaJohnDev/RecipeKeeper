let recipeForm = document.getElementById("recipe-form");
let recipeName = document.getElementById("recipe-name");
let ingredients = document.getElementById("ingredients");
let steps = document.getElementById("steps");
let recipe_url = document.getElementById("recipe-image-url");
let displayArea = document.getElementById("display-area");

let recipes = [];
recipeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let enteredRecipeName = recipeName.value;
  let enteredIngredients = ingredients.value;
  let enteredSteps = steps.value;
  let image_url = recipe_url.value;

  // create a new recipe
  let newRecipe = {
    name: enteredRecipeName,
    ingredients: enteredIngredients,
    steps: enteredSteps,
    url: image_url,
  };
  recipeName.value = "";
  ingredients.value = "";
  steps.value = "";
  recipe_url.value = "";

  displayRecipe(newRecipe);
});

function displayRecipe(recipe) {
  // create a div for the new recipe
  let recipeDiv = document.createElement("div");
  // create a delete button
  let deleteButton = document.createElement("button");
  if (recipe.url) {
    let imgElement = document.createElement("img");
    imgElement.src = recipe.url;
    imgElement.style.maxWidth = "200px";
    recipeDiv.appendChild(imgElement);
  }
  recipeDiv.innerHTML += `<h1>${recipe.name}</h1> Ingredients:  ${recipe.ingredients}<p></p> Steps<p>${recipe.steps}</p>`;
  recipeDiv.appendChild(deleteButton);
  displayArea.appendChild(recipeDiv);
  displayArea.style.display = "block";
  deleteButton.onclick = function () {
    recipeDiv.remove();
    displayArea.style.display = "none";
  };
}
