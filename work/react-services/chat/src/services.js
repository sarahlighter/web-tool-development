export const getUsers = () =>{
  return fetch('/users/')
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response =>{
      if( response.ok ) {
//        resetErrorStatus();
        return response.json();
      }else{
        throw new Error("Couldn't get data!");
      }
  });
};


export const getMessages = () =>{
  return fetch('/messages/')
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response =>{
      if( response.ok ) {
//        resetErrorStatus();
        return response.json();
      }else{
        throw new Error("Couldn't get data!");
      }
  });
};

export const sendMessage = ({username, text}) =>{
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
        //update messages and users
    } else {
        return response.json();
    }
  })
  .then( errorMessage =>{
      if(errorMessage){
          throw new Error(errorMessage.error);
      }
  });
//  .catch( err => showErrorStatus(err));
}