import React from 'react';
import splitLines from './splitLines';

const DiscussionList = ({messages}) =>{
    let keyId=0;
    const messageLine = messages.map((message)=>
        <li key={keyId++}>
          <div className="discussion">
            <div className="meta-info">
              <div className="sender-info">
                <span className="username">{message.sender}</span>
              </div>
              <div className="message-info">
                <span className="timestamp">{new Date(message.timestamp).toDateString()}</span>
              </div>
              </div>
            <p className="message-text" dangerouslySetInnerHTML={splitLines(message.text)}></p>
              
          </div>
        </li>
    );
    
    return(
        <div className="disscussions">
            <ul className="disscussions-list"> 
                {messageLine}
            </ul>
        </div>
    );
};

export default DiscussionList;