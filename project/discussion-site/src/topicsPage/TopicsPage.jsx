import React from 'react';
import TopicList from './TopicList';

const TopicsPage =({allUsers,allTopics,topicChatInfo,handleTopicChatSubmit, handleTopicChatChange,topicChatdisabled,joinNewTopicDiscussion})=>{
    return (
        <div className="chat-app">
            <div className="display-panel">
                <TopicList topics={allTopics} topicChatInfo={topicChatInfo} handleSubmit={handleTopicChatSubmit} handleChange={ handleTopicChatChange}  disabled={topicChatdisabled} joinNewTopicDiscussion={joinNewTopicDiscussion}/>
            </div>
            
        </div>
    );
}

export default TopicsPage;