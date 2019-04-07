import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';
import MessageList from './MessageList';
import Outgoing from './Outgoing';
import chat from './chat';
import {getUsers,getMessages,sendMessage} from './services';

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
            const username = "ME";
            const text = this.state.value;
            sendMessage({username,text});
            this.getAllUsersAndMessages();
            this.setState({value:''});
        }
    }
    
    handleChange(e){
        this.setState({value:e.target.value});
    }
    
    handleSubmit(e) {
        e.preventDefault();
    }
    
    getAllUsersAndMessages(){
        getUsers()
        .then( (users)=>{
            this.setState({
               allUsers: users,
            });
        });
        getMessages()
        .then( (messages)=>{
            this.setState({
               allMessages: messages,
            });
        });
    }
    
    componentDidMount(){
        this.getAllUsersAndMessages();
        setInterval(() => {this.getAllUsersAndMessages()},5000);
    }
    
    render(){ 
        return(
             <div id="chat-app">
                <div className="display-panel">
                  <UserList users={this.state.allUsers}/>
                  <MessageList messages={this.state.allMessages}/>
                </div>
                <div className="send-panel">
                    <Outgoing value={this.state.value} handleSubmit={this.handleSubmit} handleChange={this.handleChange}  keyPress={this.keyPress}/>
                </div>
            </div>
        );
    }
}

export default App;
