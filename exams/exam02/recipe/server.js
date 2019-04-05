const express = require('express');
const app = express();
const PORT = 3000;

const recipeBook = require('./recipe-book');
const recipeWeb = require('./recipe-web');

app.use(express.static('./public'));

app.get('/',(req,res) =>{
	res.send( recipeWeb.mainPage(recipeBook));
});

app.get('/newRecipe',(req,res)=>{
	res.send( recipeWeb.newRecipePage());
});

app.post("/newRecipe", express.urlencoded({ extended: false }), (req, res) => {
	const { title, ingredients, instructions } = req.body;
	if(!title && !ingredients && !instructions) {
	  	res.send(recipeWeb.newRecipePage());
	}
	else {
	  	recipeBook.addRecipe({ title, ingredients, instructions });
	  	res.redirect(`/recipeDetails?title=${title}`);
	}
});

app.get("/recipeDetails", (req,res)=>{
	const title = req.query.title;
	res.send(recipeWeb.recipeDetailsPage(recipeBook,title));
});

app.get('/recipe',(req,res)=>{
	const title = req.query.title;
	const recipeObject = recipeBook.recipes[title];
	res.json(recipeObject);
});

app.post("/recipe",  express.json(), (req, res) => {
	const { title, ingredients, instructions } = req.body;

	if(!title && !ingredients && !instructions) {
		res.status(400).json({ error: `Recipe title, ingredients and instructions are all empty`});
	}
	else {
	  	recipeBook.addRecipe({ title, ingredients, instructions });
	  	res.sendStatus(200);
	}
});

app.get('/recipesTitle',(req,res)=>{
	const allRecipesTitle = Object.keys(recipeBook.recipes);
	res.json(allRecipesTitle);
});


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));