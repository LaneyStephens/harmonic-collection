var recipe = {
  "title": "Brocoli Balls",
  "servings": 12,
  "ingredients": [
    { "name": "Butter", "quantity": "1 cup, Softened" },
    { "name": "White Sugar", "quantity": "1/2 cup" },
    { "name": "Brown Sugar", "quantity": "1 cup, packed" },
    { "name": "Adam's Best Vanilla Extract", "quantity": "1 tsp" },
    { "name": "Eggs", "quantity": "2, room temp" },
    { "name": "Baking Soda", "quantity": "1/2 tsp" },
    { "name": "Salt", "quantity": "1 tsp" },
    { "name": "Flour", "quantity": "2 1/2 cups" },
    { "name": "Chocolate Chips", "quantity": "2 cups" }
    { "name": "Butterscotch Chips", "quantity": "1 cup" }
  ]
  Cream the butter, salt, and sugars for several minutes. 
  Add egg and vanilla, mix. Incude flour, baking soda, and chips. 
  Mix until just incorporated }; bake at 350 for 8-12 minutes. 

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
