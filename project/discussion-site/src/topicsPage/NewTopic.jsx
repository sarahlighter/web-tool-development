import React from 'react';

const NewTopic=({title,handleTitleChange,topicInfo,handleSubmit,handleChange,keyPress,disabled})=>{
    return(
    <div className="send-panel">    
      <div className="outgoing">
        <div className="outgoing-title">
            <label>Title:</label>
            <input className="to-send-title" onChange={(e)=>handleTitleChange(e)} value={title} placeholder="Enter title to send"/>
        </div>
        <div className="outgoing-topic">
            <label>Topic:</label>
            <textarea className="to-send-message" value={topicInfo} placeholder="Enter message to send" onChange={(e)=>handleChange(e)} />  
        </div>
        <button disabled={disabled} onClick={handleSubmit}>Send</button> 
      </div>
    </div>
    );
};

export default NewTopic;