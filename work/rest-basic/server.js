const express = require('express');
const app = express();
const PORT = 3000;

const chat = require('./chat');
const chatWeb = require('./chat-web');

app.use(express.static('./public'));

app.get('/', (req, res) => {
  const { username } = req.query;
  if ( username && chat.users[username] ) {
    res.send( chatWeb.chatPage(chat, username) );
  } else {
    res.redirect('/login');
  }
});

app.post('/chat', express.urlencoded({ extended: false }), (req, res) => {
  const { text, username } = req.body;
  if ( username ) {
    chat.addMessage({ sender: username, text, timestamp: new Date() });
    res.redirect(`/?username=${username}`);
  } else {
    res.redirect('/login');
  }
});

app.get('/login', (req, res) => {
  res.send( chatWeb.loginPage() );
});

app.post('/login', express.urlencoded({ extended: false }), (req, res) => {
  const { username } = req.body;
  if ( username ) {
    chat.addUser({ username });
    res.redirect(`/?username=${username}`);
  } else {
    res.redirect('/login');
  }
});

app.post('/logout', express.urlencoded({ extended: false }), (req, res) => {
  const { username } = req.body;
  if ( username ) {
    chat.removeUser({ username });
  }
  res.redirect('/login');
});

app.get('/messages/', (req, res)=>{
  const messagesAndUsers = (({messages,users}) => ({messages,users}))(chat);
  res.json(messagesAndUsers);
});

app.post('/messages/', express.json(), (req, res) => {
  const { text, username } = req.body;
  if(!text){
    res.status(400).json({ error: `'message' property is required`});
  }else if(!username) {
    res.status(400).json({ error: `Unable to identify the sender`});
  }else {
    chat.addMessage({ sender: username, text, timestamp: new Date() });
    res.sendStatus(200);
  };
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
