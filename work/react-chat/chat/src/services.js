export const getUsers = ({callback}) =>{
  return fetch('/users/')
  .catch( error => Promise.reject({err:error, errorType:'service-error'}) )
  .then( response =>{
      if( response.ok ) {
          callback({err:"",errorType:"updateUserError"});
        return response.json();
      }else{
        throw new Error("Couldn't get User data!");
      }  
  })
  .catch( err => callback({err,errorType:"updateUserError"}));
};


export const getMessages = ({callback}) =>{
  return fetch('/messages/')
  .catch( error => Promise.reject({err:error, errorType:'service-error'}) )
  .then( response =>{
      if( response.ok ) {
          callback({err:"",errorType:"UpdateMessageError"});
        return response.json();
      }else{
        throw new Error("Couldn't get Message data!");
      }
  })
  .catch( err => callback({err,errorType:"UpdateMessageError"}));
};

export const sendMessage = ({username, text, callback}) =>{
  return fetch('/messages/', {
    method: 'POST',
    headers: new Headers({      
        'content-type': 'application/json'    
    }), 
    body: JSON.stringify( {username, text} )
  })
  .catch( error => Promise.reject({err:error, errorType:'service-error'}) )
  .then( response => {
    if( response.ok ){
        callback({err:"",errorType:"sendMessageError"});
    } else {
        return response.json();
    }
  })
  .then( errorMessage =>{
      if(errorMessage){
          throw new Error(errorMessage.error);
      }
  })
  .catch( err => callback({err,errorType:"sendMessageError"}));
};

export const sendUsernameToLogin = ({username,callback}) =>{
    return fetch(`/login/${username}`,{
        method: 'POST',
        headers: new Headers({      
        'content-type': 'application/json'    
        }), 
    })
    .catch( error => Promise.reject({err:error, errorType:'service-error'}) )
    .then( response => {
        if( response.ok ){
            callback({err:"",errorType:"LoginError"});
        } else {
            return response.json();
        }
      })
      .then( errorMessage =>{
          if(errorMessage){
              throw new Error(errorMessage.error);
          }
      })
      .catch( err => callback({err,errorType:"LoginError"}));
};

export const sendUsernameToLogout = ({username,callback}) =>{
    return fetch(`/logout/${username}`,{
        method:'POST',
        headers: new Headers({
            'content-type': 'application/json'
        }),
    })
    .catch(error=>Promise.reject({err:error, errorType:'service-error'}))
    .then(response =>{
        if(response.ok){
            callback({err:"",errorType:"LogoutError"});
        } else{
            return response.json();
        }
    })
    .then(errorMessage =>{
        if(errorMessage){
            throw new Error(errorMessage.error);
        }
    })
    .catch(err => callback({err,errorType:"LogoutError"}));
}