import React from 'react';

const MessageList=({messages}) =>{
    if(!messages) return "";
    const messageLine = messages.map((message)=>
        <li>
          <div className="message">
            <div className="meta-info">
              <div className="sender-info">
                <span className="username">{message.sender}</span>
              </div>
              <div className="message-info">
                <span className="timestamp">{new Date(message.timestamp).toString()}</span>
              </div>
            </div>
            <p className="message-text">{message.text}</p>
          </div>
        </li>
    );
    return(
        <ul className="users"> 
            {messageLine}
        </ul>
    );
};

export default MessageList;