import React from 'react';

const Outgoing=({value,handleSubmit,handleChange,keyPress})=>{
    return(
        <div className="outgoing">
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input className="to-send" value={value} placeholder="Enter message to send" onKeyDown={(e)=>keyPress(e)} onChange={(e)=>handleChange(e)}/>  
        </form>
      </div>
    );
};

export default Outgoing;