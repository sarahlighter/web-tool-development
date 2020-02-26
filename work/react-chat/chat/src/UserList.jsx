import React from 'react';

const UserList=({users}) =>{
    if(!users) return "";
    let keyId=0;
    const userLine = Object.values(users).map((user)=>
      <li key={keyId++}>
        <div className="user">
          <span className="username">{user}</span>
        </div>
      </li>
    );
    return(
        <ul className="users"> 
            {userLine}
        </ul>
    );
};

export default UserList;