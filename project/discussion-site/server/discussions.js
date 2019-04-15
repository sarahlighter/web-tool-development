const users = {};

const topics = [];

function addTopic({ title,sender, timestamp, text }) {
  topics.push({title, sender, timestamp, text });
}

function addUser({ username }) {
  users[username] = username;
}

function removeUser({ username }) {
  delete users[username];
}

const discussions = {
  users,
  topics,
  addTopic,
  addUser,
  removeUser
};

module.exports = discussions;

