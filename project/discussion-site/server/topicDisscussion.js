const users = {};

const messages = [];

function addDisscussion({ messages, sender, timestamp, text }) {
  messages.push({ sender, timestamp, text });
}

function addUser({users, username }) {
  users[username] = username;
}

function removeUser({users, username }) {
  delete users[username];
}

function topicDisscussion({users,messages}) {
  this.users = users;
  this.messages=messages;
  this.addDisscussion=({sender, timestamp, text })=>{
      addDisscussion({messages:this.messages,sender, timestamp, text });
  };
  this.addUser= ({ username })=>{ 
      addUser({ users:this.users, username });
  };
  this.removeUser=({ username })=>{
      removeUser({users:this.users, username});
  };
}

module.exports = topicDisscussion;
