import React from 'react';
import UserList from './UserList';
import MessageList from './MessageList';
import Outgoing from './Outgoing';
import Logout from './logout';

const ChatPage =({allUsers,allMessages,value,handleSubmit,handleChange,keyPress,logout,disabled})=>{
    return (
        <div className="chat-app">
            <div className="display-panel">
                <UserList users={allUsers}/>
                <MessageList messages={allMessages}/>
            </div>
            <div className="send-panel">
                <Outgoing value={value} handleSubmit={handleSubmit} handleChange={handleChange}  keyPress={keyPress} disabled={disabled}/>
            </div>
            <Logout logout={logout}/>
        </div>
    );
}

export default ChatPage;