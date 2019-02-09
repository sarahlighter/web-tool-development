
const chatWeb = {

  chatPage: function(chat) {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <link rel="stylesheet" href="/chat.css"/>
          <title>Chat</title>
        </head>
        <body>
          <div id="chat-app">
            <div class="display-panel">
              ${chatWeb.getUserList(chat)}
              ${chatWeb.getMessageList(chat)}
            </div>
    			<div class="send-panel">
            ${chatWeb.refresh(chat)}
    				${chatWeb.getOutgoing(chat)}
            ${chatWeb.getLogOutStatus(chat)}
    			</div>
          </div>
        </body>
      </html>
  `;
  },

  getMessageList: function(chat) {
    return `<ol class="messages">` +
      chat.messages.map( message => `
        <li>
          <div class="message">
            <div class="meta-info">
              <div class="sender-info">
                <span class="username" type="hidden">${message.sender}</span>
              </div>
              <div class="message-info">
                <span class="timestamp">${message.timestamp}</span>
              </div>
            </div>
            <p class="message-text">${message.text}</p>
          </div>
        </li>
      `).join('') +
      `</ol>`;
  },
  
  getUserList: function(chat) {
    return `<ul class="users">` +
    Object.values(chat.users).map( user => `
      <li>
        <div class="user">
          <span class="username">${user}</span>
        </div>
      </li>
    `).join('') +
    `</ul>`;
  },
  
  
  getLogOutStatus: function(chat){
	  return `
	  <div class="logOut">
    <form action="/logout" method="POST">
          <input  name="currUserName" type="hidden" value= ${chat.currUser} />
          <button type="submit">Log out</button>     
    </form> 
	  </div>
	  `;
  },
  
  getOutgoing: function(chat) {
    return `
      <div class="outgoing">
        <form action="/chat" method="POST">
          <input  name="currUserName" type="hidden" value= ${chat.currUser} />
          <input class="to-send" name="text" value="" placeholder="Enter message to send"/>
          <button type="submit">Send</button>		  
        </form>
      </div>
    `;
  },
  
  refresh: function(chat){
	  return `
      <div class="refresh">
		    <a href="/?username=${chat.currUser}" >refresh</a>
	    </div>
    `;
  }

};
module.exports = chatWeb;
