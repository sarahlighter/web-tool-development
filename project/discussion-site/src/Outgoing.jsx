import React from 'react';

const Outgoing=({title,handleTitleChange,topicInfo,handleSubmit,handleChange,keyPress,disabled})=>{
    return(
      <div className="outgoing">
        <form>
            <label>title:</label><input onChange={(e)=>handleTitleChange(e)} value={title}/>
            <label>topic:</label><textarea className="to-send" value={topicInfo} placeholder="Enter message to send" onChange={(e)=>handleChange(e)} />  
            <button disabled={disabled} onClick={handleSubmit}>Send</button>
        </form>     
      </div>
    );
};

export default Outgoing;