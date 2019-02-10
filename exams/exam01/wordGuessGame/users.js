const users = {
	addUser,
};


function addUser ( username, word ) {
	const newUser = {
		name: username,
		targetWord: word,
		guessAttempt: [],
		turnCounter: 0,
		userGuessWord:"",
	};

	users[username] = newUser;
}

module.exports = users;