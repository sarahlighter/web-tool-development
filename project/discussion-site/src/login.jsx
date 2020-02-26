import React from 'react';

const LoginPage = ({updateSender, value, disabled,handleSubmit}) =>{
    
    return(
    <div className="login">
        <form>
          <input name="username" placeholder="Enter Username" value={value} onChange={(e)=>updateSender(e.target.value)}/>
          <button onClick={(e)=>handleSubmit(e)} disabled={disabled}>Login</button>
        </form>
      </div>
    );
};

export default LoginPage;