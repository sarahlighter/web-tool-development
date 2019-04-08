export const getUsers = ({callback}) =>{
  return fetch('/users/')
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response =>{
      if( response.ok ) {
          callback({err:"",errorType:"updateUserError"});
        return response.json();
      }else{
        throw new Error("Couldn't User get data!");
      }  
  })
  .catch( err => callback({err,errorType:"updateUserError"}));
};


export const getMessages = ({callback}) =>{
  return fetch('/messages/')
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response =>{
      if( response.ok ) {
          callback({err:"",errorType:"UpdateMessageError"});
        return response.json();
      }else{
        throw new Error("Couldn't Message get data!");
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
  .catch( err => Promise.reject({ error: 'service-error', err }) )
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
}