import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';
import MessageList from './MessageList';
import Outgoing from './Outgoing';
import chat from './chat';

class App extends Component {
   constructor(){
        super();
        this.state ={
            value:'',
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }
    
    keyPress(e){
        if(e.key === 'Enter' && this.state.value){
            const sender = chat.sender;
            const timestamp = new Date();
            const text = this.state.value;
            chat.addMessage({sender,timestamp,text});
            this.setState({value:''});
            const sendbox = document.querySelector(".to-send");
            sendbox.value='';
        }
    }
    
    handleChange(e){
        this.setState({value:e.target.value});
    }
    
    handleSubmit(e) {
        e.preventDefault();
    }
    
    render(){
        return(
             <div id="chat-app">
                <div className="display-panel">
                  <UserList users={chat.users}/>
                  <MessageList messages={chat.messages}/>
                </div>
                <div className="send-panel">
                    <Outgoing handleSubmit={this.handleSubmit} handleChange={this.handleChange} keyPress={this.keyPress}/>
                </div>
            </div>
        );
    }
}

export default App;
