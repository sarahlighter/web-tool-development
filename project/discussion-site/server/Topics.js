const topicDisscussion = require('./topicDisscussion');

const users = {};

const AllTopics = {};

let topicId =0;

function addTopic({ title, sender, timestamp, text }) {
  const newTopicChat = new topicDisscussion({users:{}, messages:[]});
  AllTopics[++topicId]={key:topicId,title, sender, timestamp, text, topicChat:newTopicChat};
    return topicId;
}

function addUser({ username }) {
  users[username] = username;
}

function removeUser({ username }) {
  delete users[username];
}

function getTopicChatByTitle({title}){
    for(let topic of Object.values(AllTopics)){
        if(topic.title === title){
            return topic.topicChat;
        }
    }
    return {};
}

function getTopicChatByTopicId({topicId}){
    const topicChat=AllTopics[topicId];
    return topicChat;
}

const Topics = {
  users,
  AllTopics,
  addTopic,
  addUser,
  removeUser,
  getTopicChatByTitle,
  getTopicChatByTopicId
};

module.exports = Topics;

