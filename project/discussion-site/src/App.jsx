import React, { Component } from 'react';
import './App.css';
import {getUsers,
        getTopics,
        sendMessage,
        sendUsernameToLogin, 
        sendUsernameToLogout,
        sendTopicChatInfo,
        getTopicChatInfoByTopicId
       } from './services';
import TopicsPage from './topicsPage/TopicsPage';
import ErrorReporter from './ErrorReporter';
import NavigationBar from './NavigationBar';
import Logo from './Logo';
import TopicDiscussionPage from './topicsDiscussionPage/TopicDiscussionPage';
import NewTopic from './topicsPage/NewTopic';
import ProcessSpinner from './ProcessSpinner';

class App extends Component {
   constructor(){
        super();
        this.state ={
            title:'',
            topicInfo:'',
            topicChatInfo:'',
            tempsender:'',
            currentPage:'main',
        }
        this.backToMainPage = this.backToMainPage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTopicChatChange = this.handleTopicChatChange.bind(this);
        this.handleTopicChatSubmit = this.handleTopicChatSubmit.bind(this);
        this.joinNewTopicDiscussion = this.joinNewTopicDiscussion.bind(this);
        this.updateSender = this.updateSender.bind(this);
    
        this.currentPage = this.currentPage.bind(this);
        this.logout = this.logout.bind(this);
        this.gotoNewTopicPage =this.gotoNewTopicPage.bind(this);
    }
    
    backToMainPage(){
        this.showloading();
        this.updateTopicsState();
        setTimeout(()=>{
            this.setState({topic:'',currentPage:'main',error:''});
        },500);
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
            sendMessage({title,username,text,callback})
            .then((topicId)=>{
                if(topicId){
                    this.joinNewTopicDiscussion({key:topicId});
                    this.setState({topicInfo:'',title:''});
                }
            });
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
    
    updateTopicsState(){
        const callback=({err,errorType})=>{this.setStateError({err,errorType})};
        getTopics({callback})
        .then( (Topics)=>{
            this.setState({
               allTopics: Topics,
            });
        });
    }
    getAllUsersAndTopics(){
        this.updateUsersState();
        this.updateTopicsState();
    }
    
    logout(){
        const username=this.state.sender;
        const callback=({err,errorType})=>{this.setStateError({err,errorType})};
        sendUsernameToLogout({username,callback});
        delete this.state.sender;
        this.setState(this.state);
    }
    
    componentDidMount(){
        this.getAllUsersAndTopics();
        setInterval(() => {
            if(this.state.topic){
                this.updateTopicDiscussion({key:this.state.topic.key})
            }else{
                this.getAllUsersAndTopics();
            }
        },5000);
    }
    
    checkDisabled(){
        if(this.state.topicInfo){
            return false;
        }else{
            return true;
        }
    }

    handleTopicChatSubmit({e,topicId}){
        e.preventDefault();
        const username = this.state.sender;
        const text = this.state.topicChatInfo; 
        const callback=({err,errorType})=>{this.setStateError({err,errorType})};  
        sendTopicChatInfo({username,text,topicId,callback})
        .then((isloading)=>{
            if(isloading){
                this.updateTopicDiscussion({key:topicId});
                this.showloading();
                setTimeout(()=>{
                    this.setState({currentPage:'topicDiscussion',topicChatInfo:'', error:''});
                },500);     
            }
        });
    }
    
    handleTopicChatChange(e){
        this.setState({topicChatInfo:e.target.value});
    }
    
    showloading(){
         this.setState({error:'',currentPage:'loading'});
    }
    
    joinNewTopicDiscussion({key}){
        if(!key) return;
        this.showloading();
        setTimeout(()=>this.updateTopicDiscussion({key}),1000);
    }
    
    updateTopicDiscussion({key}){
        if(!key) return;
        const callback=({err,errorType})=>{this.setStateError({err,errorType})};
        getTopicChatInfoByTopicId({topicId:key,callback})
        .then( (topic)=>{
            this.setState({
               topic: topic,
               currentPage:'topicDiscussion',
            });
        });
    }
    
    
    currentPage(){
        if(this.state.currentPage==='topicDiscussion'){
           return( 
                <TopicDiscussionPage 
                    topic={this.state.topic} 
                    topicChatInfo={this.state.topicChatInfo} 
                    handleTopicChatSubmit={this.handleTopicChatSubmit}  
                    handleTopicChatChange={this.handleTopicChatChange} 
                    topicChatdisabled={!this.state.topicChatInfo}
                />
            );
        }else if(this.state.currentPage==='newTopic'){
            return (<NewTopic title={this.state.title} 
                        handleTitleChange={this.handleTitleChange} 
                        topicInfo={this.state.topicInfo} 
                        handleSubmit={this.handleSubmit} 
                        handleChange={this.handleChange}  
                        disabled={(!this.state.title||!this.state.topicInfo)}
                     />);
        }else if(this.state.currentPage==='main'){
            return (
                <TopicsPage allUsers={this.state.allUsers} 
                    allTopics={this.state.allTopics} 
                    joinNewTopicDiscussion={this.joinNewTopicDiscussion}
                    topicChatInfo={this.state.topicChatInfo} 
                    handleTopicChatSubmit={this.handleTopicChatSubmit}  
                    handleTopicChatChange={this.handleTopicChatChange} 
                    topicChatdisabled={!this.state.topicChatInfo}
                />
            );
        }else if(this.state.currentPage==='loading'){
            return(
                <ProcessSpinner/>
            );
        }
    }
    
    gotoNewTopicPage(){
        this.setState({currentPage:'newTopic', topic:'', error:''});
    }
    
    render(){ 
        return(
            <div id="chat-app">
               <Logo/>
               <NavigationBar updateSender={this.updateSender} value={this.state.tempsender} handleSubmit={this.handleLoginSubmit} disabled={!this.state.tempsender} isLogged={this.state.sender}  logout={this.logout} backToMainPage={this.backToMainPage} gotoNewTopicPage={this.gotoNewTopicPage}/>
                 {this.currentPage()}
               <div className="error-report">
                <ErrorReporter errorMessage={this.state.error}/>
               </div>
            </div>
        );
    }
}

export default App;
