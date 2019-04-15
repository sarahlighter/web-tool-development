const express = require('express');
const app = express();
const PORT = 4000;
const discussions = require('./discussions');

app.use(express.static('public'));

app.post('/login/:username',express.json(),(req,res)=>{
    const username = req.params.username;
    if(!username){
        res.status(400).json({error:`empty username`});
    }else{
        discussions.addUser({username});
        res.sendStatus(200);
    }
});

app.post('/logout/:username', express.json(),(req,res)=>{
    const username = req.params.username;
    if(username){
        discussions.removeUser({username});
    }else{
        res.status(204).json({Alert:`Not find login username information`});
    }
    
});

app.get('/users/', (req, res)=>{
  const users = discussions.users;
  if(users){
    res.json(users);
  }else{
    res.status(204).json({Alert:`No Users`});
  }
});

app.get('/topics/', (req, res)=>{
  const topics = discussions.topics;
  if(topics){
    res.json(topics);
  }else{
    res.status(204).json({Alert:`No Topics`});
  }
});

app.post('/topics/', express.json(), (req, res) => {
  const {title, text, username } = req.body;
  if(!text){
    res.status(400).json({ error: `'topics' property is required`});
  }else if(!username) {
    res.status(400).json({ error: `Unable to identify the sender`});
  }else {
    discussions.addTopic({title:title, sender: username, text, timestamp: new Date() });
    res.sendStatus(200);
  }
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`) );