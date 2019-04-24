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


export const getTopics = ({callback}) =>{
  return fetch('/topics/')
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

export const sendMessage = ({title, username, text, callback}) =>{
  return fetch('/topics/', {
    method: 'POST',
    headers: new Headers({      
        'content-type': 'application/json'    
    }), 
    body: JSON.stringify( {title, username, text} )
  })
  .catch( error => Promise.reject({err:error, errorType:'service-error'}) )
  .then( response => {
    if( response.ok ){
        callback({err:"",errorType:"sendMessageError"});
        return response.json();
    }
    else {
        return response.json();
    }
  })
  .then( responseMessage =>{
      if(responseMessage.error){
          throw new Error(responseMessage.error);
      }else{
          return responseMessage.topicId;
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
};

export const sendTopicChatInfo = ({username,text,topicId,callback})=>{
    return fetch(`/topicDiscussion/${topicId}`,{
        method: 'POST',
        headers: new Headers({      
            'content-type': 'application/json'    
        }), 
        body: JSON.stringify( {username,text} )
    })
    .catch(error=>Promise.reject({err:error, errorType:'service-error'}))
    .then(response =>{
        if(response.ok){
            callback({err:"",errorType:"SendDisscussionError"});
            return JSON.stringify({isloading:true});
        } else{
            return response.json();
        }
    })
    .then( responseMessage =>{
      if(responseMessage.error){
          throw new Error(responseMessage.error);
      }else{
          return responseMessage;
      }
    })
    .catch(err => callback({err,errorType:"SendDisscussionError"}));
};


export const getTopicChatInfoByTopicId =({topicId,callback})=>{
    return fetch(`/topicDiscussion/${topicId}`)
          .catch( error => Promise.reject({err:error, errorType:'service-error'}) )
          .then( response =>{
              if( response.ok ) {
                  callback({err:"",errorType:"UpdateDisscussionError"});
                return response.json();
              }else{
                throw new Error("Couldn't get Disscussion data!");
              }
          })
          .catch( err => callback({err,errorType:"UpdateDisscussionError"}));
};