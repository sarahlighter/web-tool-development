"use strict";
const recipeWeb = {
	pageWrap: function(content) {
		return`
		<!DOCTYPE html>
	      <html>
	        <head>
	          <link rel="stylesheet" href="/recipe.css"/>
	          <title>recipe</title>
	        </head>
	        <body>
	        	${recipeWeb.getNavigationBar()}
	          <div id="recipe-app">
	          	${content}     
	          </div>
	            ${recipeWeb.errorMessages()}
	          <script src="/recipe.js"></script>          
	        </body>
	      </html>
		`;
	},

	mainPage: function(recipeBook){
		return this.pageWrap(`
			${this.getRecipeTitlesList(recipeBook)}
		`);
	},

	getRecipe:function(recipeBook,title){
		const recipes=recipeBook.recipes;
		return recipes[title];
	},

	recipeDetailsPage: function(recipeBook,title){
		const recipe = this.getRecipe(recipeBook,title);
		return this.pageWrap(`
			${this.formatRecipe(recipe)}
		`);
	},

	newRecipePage: function(){
		return this.pageWrap(`
			 ${this.getOutgoing()}
		`);
	},

	getNavigationBar: function(){
		return`
		  <div class="navigation-bar">
			<ul>
			  <li>
			    <a class="back-to-mainpage" href="/">Main Page</a>
			  </li>
			  <li>
			    <a class="add-new-recipe" href="/newRecipe">New Recipe</a>
			  </li>
			</ul>
	      </div>
		`;
	},

	formatRecipeTitles: function(recipe){
		return`
			<li>
				<div class="recipe-title">
				    <a class="title" href="/recipeDetails?title=${recipe}">${recipe}</a>
				</div>
			</li>
		`;
	},

	getRecipeTitlesList: function(recipeBook){
		return`
			<ol class="all-recipe-titles">  
				${Object.keys(recipeBook.recipes).map(this.formatRecipeTitles).join('')}
			</ol>
		`;
	},

	formatRecipe: function(recipe){
		return`
			<div class="recipe-details">
				<div class="recipe-titile">
					<span class="title">title: ${recipe.title}</span>
				</div>
				<div class="recipe-ingredients">
					<span class="ingredients">ingredients: ${recipe.ingredients}</span>
				</div>
				<div class="recipe-instructions">
					<span class="instructions">instructions: ${recipe.instructions}</span>
				</div>
			</div>
		`;
	},

	getOutgoing: function(){
		return`
		<div class="outgoing">
			<form class="send" action="/newRecipe" method="POST">
				<span>title:
					<input class="to-send-title" value="" placeholder="Enter ricipe title"/>
				</span>
				<span>ingredients:
					<textarea class="to-send-ingredients" value="" placeholder="Enter ingredients"/></textarea>
				</span>
				<span>instructions:
					<textarea class="to-send-instructions" value="" placeholder="Enter instructions"/></textarea>
				</span>
				<button type="submit">Send</button>
			</form>
		</div>
		`;
	},

	errorMessages: function(){
	    return `
	      <div class="show-errors">
	        <p></p>
	      </div>
	    `;
  	},


};

module.exports = recipeWeb;