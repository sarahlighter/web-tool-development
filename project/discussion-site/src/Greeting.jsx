import React from 'react';

const Greeting = ({username}) =>{
    return(
        <div className="greeting">
            <p className="greeting">Hi, {username}</p>
        </div>
    );
};

export default Greeting;