const recipes = {
	"cola chicken": {title:"cola chicken", ingredients: "cola, chicken wings, ginger", instructions:"1. boil the chicken wings, 2. put cola and ginger inside 3.vapourize it 4. done" },
	"piculi": {title:"piculi", ingredients:"cucumber, vineger, laoganma",instructions:"cut cucumber ,put everything inside,done" },
};

function addRecipe({title, ingredients, instructions}){
	recipes[title] = {title,ingredients, instructions};
}

const recipeBook = {
	recipes,
	addRecipe,
};


module.exports = recipeBook;