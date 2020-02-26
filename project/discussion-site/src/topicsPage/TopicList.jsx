import React from 'react';

const TopicList=({topics,joinNewTopicDiscussion}) =>{
    if(!topics) return "";
    const messageLine = Object.values(topics).map((topic)=>
        <li key={topic.key} onClick={()=>joinNewTopicDiscussion({key:topic.key})}>
          <div className="topics">
            <div className="topics-title">
                <p>Title: {topic.title}</p>  
            </div>
            <div className="meta-info">
              <div className="sender-info">
                <span className="username">by {topic.sender}</span>
              </div>
              <div className="message-info">
                <span className="timestamp">{new Date(topic.timestamp).toDateString()}</span>
              </div>
              <div className="replies-info">
                <span className="replies-nums">Replies: {topic.topicChat.messages.length}</span>
              </div>
            </div>

          </div>
        </li>
    );
    return(
        <ul className="topics-list"> 
            {messageLine}
        </ul>
    );
};

export default TopicList;