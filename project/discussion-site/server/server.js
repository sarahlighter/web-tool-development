const express = require('express');
const app = express();
const PORT = 4000;
const Topics= require('./Topics');

app.use(express.static('public'));

app.post('/login/:username',express.json(),(req,res)=>{
    const username = req.params.username;
    if(!username){
        res.status(400).json({error:`empty username`});
    }else{
        Topics.addUser({username});
        res.sendStatus(200);
    }
});

app.post('/logout/:username', express.json(),(req,res)=>{
    const username = req.params.username;
    if(username){
        Topics.removeUser({username});
        res.status(200).json({loading:true});
    }else{
        res.status(204).json({Alert:`Not find login username information`});
    }
    
});

app.get('/users/', (req, res)=>{
  const users = Topics.users;
  if(users){
    res.json(users);
  }else{
    res.status(204).json({Alert:`No Users`});
  }
});

app.get('/topics/', (req, res)=>{
  const topics = Topics.AllTopics;
  if(topics){
    res.json(topics);
  }else{
    res.status(204).json({Alert:`No Topics`});
  }
});

app.post('/topics/', express.json(), (req, res) => {
  const {title, text, username } = req.body;
  if(!text){
    res.status(400).json({ error: `'Topics' property is required`});
  }else if(!username) {
    res.status(400).json({ error: `Please login before add a new topic`});
  }else if(!title){
    res.status(400).json({ error: `Title is requested for add a new topic`});
  }else {
    const topicId=Topics.addTopic({title:title, sender: username, text, timestamp: new Date() });
    res.status(200).json({topicId:topicId});
  }
});

app.post('/topicDiscussion/:topicId', express.json(), (req, res) => {
  const topicId = req.params.topicId;
  const {username,text} = req.body;
  if(!text){
    res.status(400).json({ error: `You haven't send any messages to this topic`});
  }else if(!username) {
    res.status(400).json({ error: `Please login before reply`});
  }else if(!topicId){
    res.status(400).json({ error: `Unable to identify the topic`});   
  }else{
    const topicChat = Topics.getTopicChatByTopicId({topicId}).topicChat;
    topicChat.addDisscussion({sender:username, timestamp: new Date(), text });
    res.sendStatus(200);
  }
});

app.get('/topicDiscussion/:topicId',(req,res)=>{
    const topicId = req.params.topicId;
    const topicChat = Topics.getTopicChatByTopicId({topicId});
    if(topicChat){
        res.json(topicChat);
    }else{
        res.status(204).json({Alert:`This topic hasn't been disscussed`});
    }
});



app.listen(PORT, () => console.log(`http://localhost:${PORT}`) );