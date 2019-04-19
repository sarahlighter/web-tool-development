import React from 'react';
import LoginPage from './login';
import Greeting from './Greeting';
import Logout from './logout';

const NavigationBar = ({updateSender, value, handleSubmit, disabled, isLogged, logout, backToMainPage,gotoNewTopicPage})=>{
    const showLog=()=>{
        if(!isLogged){
            return (
                <div className='login-status-div'>
                    <LoginPage updateSender={updateSender} value={value} handleSubmit={handleSubmit} disabled={disabled}/>
                </div>
            );
        }else{
            return (
                <div className='login-status-div'>
                    <Greeting username={isLogged}/>
                    <Logout logout={logout}/>
                </div>
            );
        }
    };
                    
    // todo: add onclick for main page and new topic
    return(
        <div className="navigation-bar">
          <div className="all-links">
			<ul>
              <li>
                  <p className="back-to-mainpage" onClick={()=>backToMainPage()}>Main Page</p>
              </li>
              <li>
                  <p className="new-topic" onClick={()=>gotoNewTopicPage()}>New topic</p>
              </li>
            </ul>
          </div>
            {showLog()}
        </div>
    );
};

export default NavigationBar;