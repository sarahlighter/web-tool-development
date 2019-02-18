( function IIFE() {
  const sendButton = document.querySelector(".send button");
  const toSend = document.querySelector(".to-send");
  if(toSend && sendButton) {
    sendButton.disabled = !toSend.value;
    toSend.addEventListener('input', (e) => {
      if(e.target.value) {
        sendButton.disabled = false;
      } else {
        sendButton.disabled = true;
      }
    });
  }
})();

( function createUnselectButton(){
  const userlist = document.querySelector(".users");
  const btn = document.createElement("BUTTON");
  const t = document.createTextNode("Unselect ALL");
  btn.appendChild(t);
  btn.id = 'unselect-button';
  btn.style.display = "none";
  userlist.appendChild(btn);
})();

const unselectButton = document.getElementById('unselect-button');


const status={}; 

(function getStatus(){
  if(!status.selectedUsers){
    status.selectedUsers = {};
    getSelectedUsers();
  }
  initSelectedUsers();
  selectButtonStatus();
})();

( function selectUser(){
  const allUsers = document.querySelector(".users");
  allUsers.addEventListener('click', (e) =>{
    if(e.target.classList.contains('username')){
      const selectedUser =e.target.textContent;
      updateStatus(selectedUser);
      userMatchMessages(selectedUser);
      selectButtonStatus();
    }
  });
})();

function userMatchMessages(selectedUser){
  const senders = document.getElementsByClassName('username');
  for (let user of senders) {
    if(user.textContent === selectedUser){
       const message = user.parentElement.parentElement.parentElement;
       if(message.classList.contains('message')){
          message.classList.toggle('selected');
       }
       else{
          user.classList.toggle('selected');
       } 
    }
  }
  hiddenOtherMessages();
}

unselectButton.addEventListener("click", function(){
  const allselected = document.getElementsByClassName('selected');
  while(allselected[0]){
    allselected[0].classList.remove('selected');
  }
  selectButtonStatus();
  removeAllHiddenReminder();
  window.name="";
});

const logout = { logoutbutton: {}};
(function getLogOutbutton(){
  const allsubmitbutton= document.querySelectorAll('button');
  for(let button of allsubmitbutton){
     if(button.textContent === "Logout"){
      logout.logoutbutton = button;
    }
  }
})();

logout.logoutbutton.addEventListener("click",function(){
  window.name=""; 
});


function selectButtonStatus(){
  const hasSelected = document.getElementsByClassName('selected').length!==0;
  if(hasSelected){
    unselectButton.style.display = "inline-flex";
  }else{
    unselectButton.style.display = "none";
    status.selectedUsers = {};
    showAllMessages();
    removeAllHiddenReminder();
  }
}


function hiddenOtherMessages(){
  const listItems = document.querySelector('.messages').querySelectorAll('li');
  const lastElement = {IsReminder:false, messageElement:{}};
  const hiddenMessage ={ exist: false};
  for(let items of listItems){
    const m = items.children[0];
    if(m.classList.contains("message")){
      if(m.classList.contains("selected")){
        m.style.display = "inline-flex";
        if( hiddenMessage.exist && !lastElement.IsReminder){
          m.parentElement.insertAdjacentElement('beforebegin',createHiddenReminder());
          lastElement.IsReminder = true;
        }
        hiddenMessage.exist = false;
      }else{
        m.style.display = "none";
        hiddenMessage.exist = true;
      }
      lastElement.IsReminder = false;
      lastElement.messageElement = m;
    }
    else {
      items.parentNode.removeChild(items);
    }
  }
  if(!lastElement.messageElement.classList.contains('selected')){
    lastElement.messageElement.parentElement.insertAdjacentElement('beforebegin',createHiddenReminder());
  }
}

function removeAllHiddenReminder(){
  const allhiddenReminder = document.getElementsByClassName('hidden-reminder');
  const messages = document.querySelector(".messages");
  for(let hid of allhiddenReminder){
    messages.removeChild(hid.parentNode);
  }

}

function createHiddenReminder(){
  const reminderListItem = document.createElement("li");
  const reminderDiv = document.createElement("div");
  reminderDiv.className = 'hidden-reminder';
  const reminderPara = document.createElement("p");
  const text = document.createTextNode("Hidden Messages······");
  reminderPara.appendChild(text);
  reminderDiv.appendChild(reminderPara);
  reminderListItem.appendChild(reminderDiv);
  return reminderListItem;
};

function showAllMessages(){
  const message = document.getElementsByClassName('message');
  for(let m of message){
    m.style.display = "inline-flex";
  }
}

function initSelectedUsers(){
  const keys = Object.keys(status.selectedUsers);
  for(let username of keys){
    userMatchMessages(username);
  }
}

function updateStatus( selectedUser ) {
  if(status.selectedUsers[selectedUser]){
    delete status.selectedUsers[selectedUser];
  }else{
      status.selectedUsers[selectedUser] = selectedUser;
  }
  const keys = Object.keys(status.selectedUsers);
  const allselected={ users:""}
  for(let username of keys){
    allselected.users+=username+";";
  }
  window.name=allselected.users;
}

function getSelectedUsers(){
  const allusers=window.name.split(";");
  for (let user of allusers) {
    status.selectedUsers[user] = user;
  }
}