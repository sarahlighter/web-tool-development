import React from 'react';
import LoginPage from './login';
import Greeting from './Greeting';
const NavigationBar = ({updateSender, value, handleSubmit, disabled, isLogged})=>{
    const showLog=()=>{
        if(!isLogged){
            return (<LoginPage updateSender={updateSender} value={value} handleSubmit={handleSubmit} disabled={disabled}/>);
        }else{
            return (<Greeting username={isLogged}/>);
        }
    };
                    
    // todo: add onclick for main page and new topic
    return(
        <div className="navigation-bar">
          <div className="all-links">
			<ul>
              <li>
                  <a className="back-to-mainpage" href="/">Main Page</a>
              </li>
              <li>
                  <a className="new-topic" href="/">New topic</a>
              </li>
            </ul>
          </div>
            <div className="login-status-div">
                {showLog()}
            </div>
        </div>
    );
};

export default NavigationBar;