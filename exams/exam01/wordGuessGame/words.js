// const wordlist = [];
const words = {
	wordsPage: function(){
		return `
	      <!DOCTYPE html>
	      <html>
	        <head>
	          <link rel="stylesheet" href="/words.css"/>
	          <title>WROD GUESS GAME</title>
	        </head>
	        <body>
	          <div class="wordsGuess-app">
	    		<div class="send-panel">
	           		${words.doGuess()}
	    		</div>
	            <div class="display-panel">
	            	${words.showGuessList()}
	            	${words.checkGuess()}
	            </div>	    		
	          </div>
	        </body>
	      </html>
	  `; 
	},

	wordlist : {},
	currentUser: {},

	randomWord: function(){
		const keys = Object.keys(words.wordlist);
		const newTarget = words.wordlist[keys[keys.length*Math.random()<<0]];
		console.log("The correct word is : "+ newTarget);
		return newTarget;
	},

	showGuessList: function(){
		return `
		<div class="validWordList-container"> 
			<h1 class="validWordList-title">All Valid Words</h1>
			<ul class="allwords">` +
		    Object.values(words.wordlist).map( word => `
		      <li>
		        <div class="word">
		          <span class="username">${word}</span>
		        </div>
		      </li>
		    `).join('') +
		    `</ul>
		</div>`;
	},

	doGuess: function() {
		return `
		    <div class="outgoing">
		        <form class="guessForm" action="/guess" method="POST">
		          <input name ="currentUserName" type="hidden" value="${words.currentUser.name}"/>
		          <input class ="to-send" name="userGuess" value="" placeholder="Enter a Letter..." required/>
		          <button class = "guess-button" type="submit">Send</button>		  
		        </form>
		    </div>
	    `;
	},
	
	checkGuess: function(){
		const currUser =words.currentUser;
		const checkResult = { result:"",};
		const isWin = { status: false}; 
		if(currUser.userGuessWord === null || currUser.userGuessWord === undefined){
			 currUser.guessAttempt.push(null);
		}else{
			const upperCaseGuess = currUser.userGuessWord.toUpperCase();
			if( upperCaseGuess === currUser.targetWord){
				isWin.status = true;
				currUser.turnCounter = currUser.turnCounter+1;
				checkResult.result = "Congratulation! YOU WIN ! THe correct word is <strong>"+currUser.targetWord+"</strong> ! You have guessed "+currUser.turnCounter+ " times! Loading New Game...";
				currUser.turnCounter = 0;
				currUser.userGuessWord = "";
			}
			else if( words.wordlist[upperCaseGuess] ){
				currUser.turnCounter= currUser.turnCounter+1;
				const matches=checkSameLetter(upperCaseGuess, currUser.targetWord);
				checkResult.result = currUser.userGuessWord+" "+matches+" matches. You have guessed " + currUser.turnCounter +" times. ";
			}else{
				if(currUser.userGuessWord){
					checkResult.result = "INVALID WORD!";
				}
			}
			currUser.guessAttempt.push(checkResult.result);
		}
		
		const parthtml= `<ol class="guess_results">` +
	      currUser.guessAttempt.map( guessResult => `
	        <li>
	          <div class="checkResult-panel">
	            <div class ="checkResult">
					<p> ${guessResult} </p>
				</div>
	          </div>
	        </li>
	      `).join('') +
	    `</ol>`;
	    if(isWin.status) {
	    	return popout()+parthtml;
	    }
		else {
			return parthtml;
		}
	},	

	restartNewGame: function(){
		words.currentUser.userGuessWord="";
		return `
		    <div class="restartNewGame">
		        <form class="restartForm" action="/restart" method="POST">
		          <input name ="currUserRestart" type="hidden" value="${words.currentUser.name}"/>
		          <button class = "restart-button" type="submit">Restart</button>		  
		        </form>
		    </div>
	    `;
	}

};

function popout(){
	return `
		<div class="callout">
		  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
		  <h1 class="callout-header">Awesome, You Won!</h1>
		  <div class="callout-container">
		    <p>Restart A New Game? </p>
		    ${words.restartNewGame()}
		  </div>
		</div>
	`;
}

function checkSameLetter( userGuessWord, targetWord ){
	const counter = { num: 0};
	const guessArray = Array.from(userGuessWord);
	const targetArray = Array.from(targetWord);
	const targetletter ={};

	for (let letter of targetArray) {
		if(targetletter[letter]){
			targetletter[letter] = targetletter[letter]+1;
		} else{
			targetletter[letter] = 1;
		}
	}

	for(let letter of guessArray){
		if(targetletter[letter]){
			const letterNum=targetletter[letter];
			if( letterNum === 1 ){
				delete targetletter[letter];
			} 
			else {
				targetletter[letter] = letterNum-1;
			}
			counter.num=counter.num+1;
		}
	}
	return counter.num;
}

module.exports = words;