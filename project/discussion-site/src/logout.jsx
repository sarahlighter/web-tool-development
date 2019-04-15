import React from 'react';

const Logout =({logout})=>{
    return (
      <div className="logout">
          <button onClick={logout}>Logout</button>
      </div>
    );
};

export default Logout;