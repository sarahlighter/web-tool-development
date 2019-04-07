import React from 'react';

const UserList=({users}) =>{
    if(!users) return "";
    const userLine = Object.values(users).map((user)=>
      <li>
        <div class="user">
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