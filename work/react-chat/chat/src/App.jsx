import React, { Component } from 'react';
import './App.css';
import {getUsers,getMessages,sendMessage,sendUsernameToLogin, sendUsernameToLogout} from './services';
import LoginPage from './login';
import ChatPage from './ChatPage';
import ErrorReporter from './ErrorReporter';

class App extends Component {
   constructor(){
        super();
        this.state ={
            value:'',
            tempsender:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.updateSender = this.updateSender.bind(this);
        this.logout = this.logout.bind(this);
    }
    
    updateSender(senderName){
        if(!senderName) return;
        this.setState({tempsender:senderName});
    }
    getStateError(){
        return this.state.error;
    }
    
    setStateError({err,errorType}){
        if(!errorType) return;
        this.setState(prevState=>({error:{...prevState.error,[errorType]: err}}));
    }
    
    handleLoginSubmit(e){
        e.preventDefault();
         const username = this.state.tempsender;
         const callback=({err,errorType})=>{this.setStateError({err,errorType})};
         sendUsernameToLogin({username,callback});
         this.setState({sender:username, tempsender:''});
    }

    handleChange(e){
        this.setState({value:e.target.value});
    }
    
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.value){
            const username = this.state.sender;
            const text = this.state.value; 
            const callback=({err,errorType})=>{this.setStateError({err,errorType})};
            sendMessage({username,text,callback});
            this.getAllUsersAndMessages();
            this.setState({value:''});
        }
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
    
    logout(){
        const username=this.state.sender;
        const callback=({err,errorType})=>{this.setStateError({err,errorType})};
        sendUsernameToLogout({username,callback});
        delete this.state.sender;
        this.setState(this.state);
    }
    
    componentDidMount(){
        this.getAllUsersAndMessages();
        setInterval(() => {this.getAllUsersAndMessages()},5000);
    }
    
    checkDisabled(){
        if(this.state.value){
            return false;
        }else{
            return true;
        }
    }
    
    checkLoginStatus(){
        if(!this.state.sender){
            return (<LoginPage updateSender={this.updateSender} value={this.state.sender} handleSubmit={this.handleLoginSubmit} disabled={!this.state.tempsender}/>);
        }else{
            return(                
                <ChatPage allUsers={this.state.allUsers} allMessages={this.state.allMessages} value={this.state.value} handleSubmit={this.handleSubmit} handleChange={this.handleChange}  logout={this.logout} disabled={!this.state.value}/>
            );
        }
    }

    render(){ 
        return(
             <div id="chat-app">
               {this.checkLoginStatus()}
               <div className="error-report">
                <ErrorReporter errorMessage={this.state.error}/>
               </div>
            </div>
        );
    }
}

export default App;
