const express = require('express');
const app = express();
const PORT = 3000;
const words = require('./words');
const users = require('./users'); 
const fs =require('fs');
const allUser ={ num:0 };
app.use(express.static('./public'));

fs.readFile("./allwords.txt", (err, data)=>{
	const textByComma = data.toString().split(", ");
	for(let w of textByComma){
		const Capital_w=w.toUpperCase();
		words.wordlist[Capital_w]=Capital_w;
	}
});

app.use(express.static('./public'));

app.get('/', (req, res) =>{
	const currentuser =req.query.username;
	if(currentuser === undefined || currentuser === null) {
		allUser.num= allUser.num+1;
		const newuser = "user"+ allUser.num;
		const newTarget = words.randomWord();
		users.addUser(newuser, newTarget);
		words.currentUser= users[newuser];
		res.redirect('/?username='+newuser);
	}
	else res.send(words.wordsPage());
});

app.post('/restart',express.urlencoded({ extended: false }),  (req, res) =>{
	const currUser =req.body.currUserRestart;
	const newTarget = words.randomWord();
	words.currentUser = users[currUser];
	users[currUser].targetWord = newTarget;
	res.redirect('/?username='+currUser);
});


app.post('/guess', express.urlencoded({ extended: false }), (req, res) => {
	  const sendObject = req.body;
	  const currUser = users[sendObject.currentUserName];
	  const word = sendObject.userGuess;
	  currUser.userGuessWord = word;
	  words.currentUser = currUser;
	  res.redirect('/?username='+sendObject.currentUserName);
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

