import React from 'react';

const MessageInput = ({topicChatInfo,handleSubmit,handleChange,keyPress,disabled,topicId})=>{
    return(
      <div className="reply-outgoing">
        <label>Reply to this Topic:</label>
        <textarea className="to-send-message" value={topicChatInfo} placeholder="Enter message to send" onChange={(e)=>handleChange(e)} />  
        <button disabled={disabled} onClick={(e)=>handleSubmit({e,topicId})}>Send</button>
      </div>
    );
};

export default MessageInput;