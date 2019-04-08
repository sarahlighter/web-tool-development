import React from 'react';

const ErrorReporter = ({errorMessage}) =>{
    if(!errorMessage){
        return (<div className="show-errors"></div>);
    }
    const errorMessageLine = Object.values(errorMessage).map((errorinfo)=>
      <li>
        <div className="error-message">
          <span className="error">{errorinfo.toString()}</span>
        </div>
      </li>
    );
    return (
      <div className="show-errors">
        <ul className="show-errors-list">{errorMessageLine}</ul>
      </div>
    );
};

export default ErrorReporter;