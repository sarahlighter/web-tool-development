const recipes = {};

function addRecipe({title, ingredients, instructions}){
	recipes[title] = {title,ingredients, instructions};
}

const recipeBook = {
	recipes,
	addRecipe,
};


module.exports = recipeBook;