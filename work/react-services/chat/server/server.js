const express = require('express');
const app = express();
const PORT = 4000;

const chat = require('./chat');

app.get('/users/', (req, res)=>{
  const users = chat.users;
  if(users){
    res.json(users);
  }else{
    res.status(204).json({Alert:`No Users`});
  }
});

app.get('/messages/', (req, res)=>{
  const messages = chat.messages;
  if(messages){
    res.json(messages);
  }else{
    res.status(204).json({Alert:`No messages`});
  }
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
  }
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`) );