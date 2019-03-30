import React from 'react';

const UserList=({users}) =>{
    const userLine = Object.values(users).map((user)=>
      <li>
        <div class="user">
          <span class="username">{user}</span>
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