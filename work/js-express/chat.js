const users = {
    "Amit": "Amit",
    "Bao": "Bao",
};
const currUser= null;

const messages = [
  {
    sender: "Amit",
    timestamp: new Date("2019-01-01 19:20:00"),
    text: "You up?",
  },
  {
    sender: "Bao",
    timestamp: new Date("2019-01-01 19:21:00"),
    text: "Yeah, still working on this INFO6250 work, but I keep getting distracted by cat videos",
  }
];

function addMessage({ sender, timestamp, text }) {
  messages.push({ sender, timestamp, text });
}

function addUser( userName ) {
	//eval("users." + userName + " = '" + userName+ "'");
  //currUser.userName=userName;
	users[userName]=userName;
}

function deleteUser( userName ){
  //console.log(userName);
	delete users[userName];
}

const chat = {
  users,
  messages,
  addMessage,
  addUser,
  deleteUser,
  currUser,
};

module.exports = chat;

