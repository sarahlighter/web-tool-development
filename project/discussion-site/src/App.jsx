import React, { Component } from 'react';
import './App.css';
import {getUsers,getMessages,sendMessage,sendUsernameToLogin, sendUsernameToLogout} from './services';
import ChatPage from './ChatPage';
import ErrorReporter from './ErrorReporter';
import NavigationBar from './NavigationBar';
import Logo from './Logo';

//@todo:
//1.create topic
//2.get inside chat room
//3. set time out and show progress spinners

class App extends Component {
   constructor(){
        super();
        this.state ={
            title:'',
            topicInfo:'',
            tempsender:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
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
    
    handleTitleChange(e){
        this.setState({title:e.target.value});
    }

    handleChange(e){
        this.setState({topicInfo:e.target.value});
    }
    
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.topicInfo){
            const username = this.state.sender;
            const text = this.state.topicInfo; 
            const title =this.state.title;
            const callback=({err,errorType})=>{this.setStateError({err,errorType})};
            sendMessage({title,username,text,callback});
            this.getAllUsersAndMessages();
            this.setState({topicInfo:'',title:''});
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
        if(this.state.topicInfo){
            return false;
        }else{
            return true;
        }
    }
    

    render(){ 
        return(
            <div id="chat-app">
               <Logo/>
               <NavigationBar updateSender={this.updateSender} value={this.state.tempsender} handleSubmit={this.handleLoginSubmit} disabled={!this.state.tempsender} isLogged={this.state.sender}/>
                 <ChatPage allUsers={this.state.allUsers} allMessages={this.state.allMessages} handleTitleChange={this.handleTitleChange} title={this.state.title} topicInfo={this.state.topicInfo} handleSubmit={this.handleSubmit} handleChange={this.handleChange}  logout={this.logout} disabled={!this.state.topicInfo}/>
               <div className="error-report">
                <ErrorReporter errorMessage={this.state.error}/>
               </div>
            </div>
        );
    }
}

export default App;
