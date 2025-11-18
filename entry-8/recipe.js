var recipe = {
  "title": "Chocolate Chip Cookies",
  "servings": 4,
  "ingredients": [
    { "name": "Butter", "quantity": "1 cup" },
    { "name": "Sugar", "quantity": "1 cup" },
    { "name": "Brown Sugar", "quantity": "1 cup" },
    { "name": "Vanilla Extract", "quantity": "1 tsp" },
    { "name": "Eggs", "quantity": "2" },
    { "name": "Baking Soda", "quantity": "1 tsp" },
    { "name": "Salt", "quantity": "1 tsp" },
    { "name": "Flour", "quantity": "3 cups" },
    { "name": "Chocolate Chips", "quantity": "2 cups" }
  ]
};

function populateRecipeDetails(recipeData) {
  var titleElement = document.querySelector('.recipe-title');
  titleElement.textContent = recipeData.title;

  var servingsElement = document.querySelector('.servings');
  servingsElement.textContent = `Servings: ${recipeData.servings}`;

  var ingredientsList = document.querySelector('.ingredients');
  recipeData.ingredients.forEach(function(ingredient) {
    var item = document.createElement('li');
    item.textContent = `${ingredient.quantity} of ${ingredient.name}`;
    item.addEventListener('click', function() {
      item.classList.toggle('crossed-off');
    });
    ingredientsList.appendChild(item);
  });
}

populateRecipeDetails(recipe);
