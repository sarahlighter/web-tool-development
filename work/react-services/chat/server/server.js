const express = require('express');
const app = express();
const PORT = 4000;

const chat = require('./chat');

app.post('/chat',  (req,res)=>{
    res.json("get chat");
});

app.get('/users/', (req, res)=>{
  const users = chat.users;
  res.json(users);
});

app.get('/messages/', (req, res)=>{
  const messages = chat.messages;
  res.json(messages);
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

app.listen(PORT, () => console.log(`http://localhost:${PORT}`) );