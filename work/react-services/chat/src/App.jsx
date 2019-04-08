import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';
import MessageList from './MessageList';
import Outgoing from './Outgoing';
import ErrorReporter from './ErrorReporter';
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
    
    getStateError(){
        return this.state.error;
    }
    
    setStateError({err,errorType}){
        if(!errorType) return;
        this.setState(prevState=>({error:{...prevState.error,[errorType]: err}}));
    }

    keyPress(e){
        if(e.key === 'Enter' && this.state.value){
            const username = "ME";
            const text = this.state.value; 
            const callback=({err,errorType})=>{this.setStateError({err,errorType})};
            sendMessage({username,text,callback});
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
    
    updateUsersState(){
        const callback=({err,errorType})=>{this.setStateError({err,errorType})};
        getUsers({callback})
        .then( (users)=>{
            this.setState({
               allUsers: users,
            });
        });
    }
    updateMessagesState(){
        const callback=({err,errorType})=>{this.setStateError({err,errorType})};
        getMessages({callback})
        .then( (messages)=>{
            this.setState({
               allMessages: messages,
            });
        });
    }
    getAllUsersAndMessages(){
        this.updateUsersState();
        this.updateMessagesState();
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
                <div className="error-report">
                    <ErrorReporter errorMessage={this.getStateError()}/>
                </div>
            </div>
        );
    }
}

export default App;
