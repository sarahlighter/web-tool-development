import React from 'react';

import MessageInput from './MessageInput';
import DiscussionList from './DiscussionList';
import TopicDetails from './TopicDetails';

const TopicDiscussionPage=({topic,topicChatInfo, handleTopicChatSubmit,  handleTopicChatChange, topicChatdisabled}) =>{
    if(!topic) return "";
    return(
        <div className="chat-app">
            <div className="display-panel">
                <TopicDetails title={topic.title} sender={topic.sender} timestamp={topic.timestamp} topicText={topic.text}/>
                <DiscussionList messages={topic.topicChat.messages}/>
            </div>
            <div className="send-panel">
                <MessageInput topicChatInfo={topicChatInfo} handleSubmit={handleTopicChatSubmit} handleChange={handleTopicChatChange} disabled={topicChatdisabled} topicId={topic.key}/>
            </div>
         </div>
    );
};

export default TopicDiscussionPage;