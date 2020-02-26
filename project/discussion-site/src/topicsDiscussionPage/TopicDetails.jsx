import React from 'react';
import splitLines from './splitLines';

const TopicDetails=({title, sender, timestamp, topicText})=>{
    return (
        <div className="topic-details">
            <div className="topic-title">
                <h1>{title}</h1>
            </div>
            <div className="topic-Info">
                <div className="topic-meta-info">
                    <div className="sender-info">
                        <span className="username">{sender}</span>
                    </div>
                    <div className="message-info">
                        <span className="timestamp">{new Date(timestamp).toDateString()}</span>
                    </div>
                </div>
                <p className="message-text" dangerouslySetInnerHTML={splitLines(topicText)}></p>
            </div>
        </div>
    );
};

export default TopicDetails;