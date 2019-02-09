const express = require('express');
const app = express();
const PORT = 3000;
let currentSender='Bao';
const chat = require('./chat');
const chatWeb = require('./chat-web');

app.use(express.static('./public'));

app.get('/', (req, res) => {
    const username = req.query.username;
	if (username === undefined || username == null ) {
        res.redirect('/login');
	}else{
        chat.currUser=username;
		res.send(chatWeb.chatPage(chat));
	}
});
 
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});
	
app.post('/login', express.urlencoded({ extended: false }), (req, res) => {
    const username =req.body.username;
    chat.currUser=username;
    chatWeb.currUser=username;
	chat.addUser(username);
	res.redirect('/?username='+username);
});

app.post('/logout', express.urlencoded({ extended: false }), (req, res) => {
    const {currUserName} = req.body;
	chat.deleteUser(chat.currUser);
    res.redirect('/login');
});

app.post('/chat', express.urlencoded({ extended: false }), (req, res) => {
	  const { text, currUserName } = req.body;
	  chat.addMessage({ sender:currUserName, text, timestamp: new Date() });
      chat.currUser=currUserName;
	  res.redirect('/?username='+currUserName);
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
