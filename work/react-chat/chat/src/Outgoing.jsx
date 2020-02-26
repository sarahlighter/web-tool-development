import React from 'react';

const Outgoing=({value,handleSubmit,handleChange,keyPress,disabled})=>{
    return(
      <div className="outgoing">
        <form>
            <input className="to-send" value={value} placeholder="Enter message to send" onChange={(e)=>handleChange(e)} />  
            <button disabled={disabled} onClick={handleSubmit}>Send</button>
        </form>     
      </div>
    );
};

export default Outgoing;