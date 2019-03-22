'use strict';
(function intervalRequest() {

	const addNewRecipePage =() =>{
		const newRecipeButton = document.querySelector(".add-new-recipe");
		if(!newRecipeButton) return;
		newRecipeButton.addEventListener('click', (e) => {
			e.preventDefault();
			newRecipePageContent();
			disableSendFormPost();
			checkNewRecipeStatus();
			addRecipe();
		});
	};

	const newRecipePageContent =() => {
		const recipeDiv = document.querySelector("#recipe-app");
		recipeDiv.innerHTML =`
		<div class="outgoing">
			<form class="send">
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
	};

	const getRecipe = (title)=>{
		fetch(`/recipe?title=${title}`)
		.then( response=>{
			if( response.ok ) {
				resetErrorStatus();
				return response.json();
			}else{
				throw new Error("Couldn't get data!");
			}
		})
		.then( response =>{
			showRecipeDetails( response );
		})
		.catch(err =>showErrorStatus(err));
	};

	const showRecipeDetails = (recipe) =>{
		const recipeDiv = document.querySelector("#recipe-app");
		recipeDiv.innerHTML =`
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
			</div>`;
	};

	const addRecipe = () =>{
		const sendButton = document.querySelector(".send button");
		const title = document.querySelector(".to-send-title");
		const ingredients = document.querySelector(".to-send-ingredients");
		const instructions = document.querySelector(".to-send-instructions");
		if(!sendButton) return;
		sendButton.addEventListener('click', () => {
			sendNewRecipeInfo(title.value, ingredients.value, instructions.value);
		});
	};

	const checkNewRecipeStatus =() =>{
		const sendButton = document.querySelector(".send button");
		const title = document.querySelector(".to-send-title");
		const ingredients = document.querySelector(".to-send-ingredients");
		const instructions = document.querySelector(".to-send-instructions");

		if(sendButton && title && ingredients && instructions){
			sendButton.disabled = !title.value && !ingredients.value && !instructions.value;
			title.addEventListener('input', (e) => {
			    if(e.target.value || ingredients.value || instructions.value) {
			    	sendButton.disabled = false;	    	
			    } else {
			        sendButton.disabled = true;
			    }
		    });
		    ingredients.addEventListener('input', (e) => {
			    if(e.target.value || title.value || instructions.value) {
			    	sendButton.disabled = false;	    	
			    } else {
			        sendButton.disabled = true;
			    }
		    });
		    instructions.addEventListener('input', (e) => {
			    if(e.target.value || ingredients.value || title.value) {
			    	sendButton.disabled = false;	    	
			    } else {
			        sendButton.disabled = true;
			    }
		    });
		}
	};

	const sendNewRecipeInfo =(title, ingredients, instructions) =>{
		fetch('/recipe', {
			method: 'POST',
			headers: new Headers({      
				'content-type': 'application/json'    
			}), 
			body: JSON.stringify({title, ingredients, instructions})
		})
		.then( response => {
			if( response.ok ){
				getRecipe(title);
				resetErrorStatus();
			} else {
				return response.json();
			}
		})
		.then( errorMessage =>{
			if(errorMessage){
				throw new Error(errorMessage.error);
			}
		})
		.catch( err => showErrorStatus(err));
	};


	const disableSendFormPost = () =>{
		const sendForm = document.querySelector(".send");
		if(!sendForm) return;
		sendForm.setAttribute("onsubmit","event.preventDefault()");
	};

	const showErrorStatus = ( ResponseStatus ) =>{
		document.querySelector(".show-errors p").innerText=ResponseStatus;
	};

	const resetErrorStatus = () =>{
		document.querySelector(".show-errors p").innerText='';
	};
	
	const backToMainPage = () =>{
		const mainPageButton = document.querySelector(".back-to-mainpage");
		if(!mainPageButton) return;
		mainPageButton.addEventListener('click', (e) => {
			e.preventDefault();
			getRecipesTitle();
		});
	};

	const getRecipesTitle = ()=>{
		fetch('/recipesTitle')
		.then( response=>{
			if( response.ok ) {
				resetErrorStatus();
				return response.json();
			}else{
				throw new Error("Couldn't get data!");
			}
		})
		.then( response =>{
			mainPageContent( response );
		})
		.catch(err =>showErrorStatus(err));
	};

	const mainPageContent =(recipesTitle) =>{
		const recipeDiv = document.querySelector("#recipe-app");
		recipeDiv.innerHTML =`
			<ol class="all-recipe-titles">`+  
				recipesTitle.map(recipe =>`
					<li>
						<div class="recipe-title">
						    <a class="title" href="/recipeDetails?title=${recipe}">${recipe}</a>
						</div>
					</li>
				`).join('')+
			`</ol>`;
		recipeTitleListener();
	};

	const recipeTitleListener = () =>{
		const recipeTitles = document.querySelectorAll(".recipe-title a");
		for(let recTitle of recipeTitles){
			recTitle.addEventListener('click', (e)=>{
				e.preventDefault();
				getRecipe(recTitle.innerText);
			});
		}

	};

	addNewRecipePage();
	backToMainPage();
	recipeTitleListener();
})();