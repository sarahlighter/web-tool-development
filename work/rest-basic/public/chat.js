"use strict";
(function intervalRequest(){

	const updateMessagesAndUsers = () =>{
		fetch('/messages/')
		.then( response =>{
			if( response.ok ) {
				resetErrorStatus();
				return response.json();
			}else{
				throw new Error("Couldn't get data!");
			}
		})
		.then( response =>{
			updateMessages( response.messages );
			updateUsers( response.users );
		})
		.catch(err => showErrorStatus(err));
	};

	const updateMessages = ( messages ) =>{
		const allMessage = messages.map( message => 
		`<li>
		    <div class="message">
		        <div class="meta-info">
		            <div class="sender-info">
		                <span class="username" type="hidden">${message.sender}</span>
		            </div>
			        <div class="message-info">
			        	<span class="timestamp">${message.timestamp}</span>
			    	</div>
		    	</div>
		    	<p class="message-text">${message.text}</p>
		    </div>
		</li>`).join('');
		const messagesDIV = document.querySelector('.messages');
		if(messagesDIV){
			messagesDIV.innerHTML = allMessage;
		}
	};

	const updateUsers = ( users ) =>{
		const allUser = Object.values(users).map( user => 
		`<li>
			<div class="user">
			    <span class="username">${user}</span>
			</div>
		</li>
		`).join('');
		const usersDIV = document.querySelector('.users');
		if(usersDIV){
			usersDIV.innerHTML = allUser;
		}
	};

	const sendCheck = () =>{
		const sendButton = document.querySelector(".send button");
		const toSend = document.querySelector(".to-send");
		if(toSend && sendButton) {
		   	sendButton.disabled = !toSend.value;
		    toSend.addEventListener('input', (e) => {
			    if(e.target.value) {
			    	sendButton.disabled = false;	    	
			    } else {
			        sendButton.disabled = true;
			    }
		    });
		}
	};

	const loginCheck = () =>{
		if(document.querySelector(".login")){
			const login = document.querySelector(".login").children[0];
			const username = login.children[0];
			const loginButton = login.children[1];
			if(username && loginButton){
				loginButton.disabled = !username.value;
				username.addEventListener('input',(e) =>{
					if(e.target.value) {
						loginButton.disabled = false;
					}else{
						loginButton.disabled = true;

					}
				});
			}
		}
	};

	const removeRefreshButton = () =>{
		const refreshButton = document.querySelector(".refresh");
		if(refreshButton)
			refreshButton.parentNode.removeChild(refreshButton);

	};

	const sendMessage = () =>{
		const sendButton = document.querySelector(".send button");
		if(!sendButton) return;
		sendButton.addEventListener('click', () => {
			const currentURL = new URL(document.URL);
			const username = currentURL.searchParams.get("username");
			const text = document.querySelector(".to-send").value;
			if(username && text){
				document.querySelector(".to-send").value = '';
				fetch('/messages/', {
					method: 'POST',
					headers: new Headers({      
						'content-type': 'application/json'    
					}), 
					body: JSON.stringify( {username, text} )
				})
				.then( response => {
					if( response.ok ){
						updateMessagesAndUsers();
						resetErrorStatus();
					} else {
						throw new Error("Your post fetch is failed");
					}
				})
				.catch( err => showErrorStatus(err));
			}
		});
	};

	const disableSendFormPost = () =>{
		const sendForm = document.querySelector(".send");
		if(!sendForm) return;
		sendForm.setAttribute("onsubmit","event.preventDefault()");
	};

	const showErrorStatus = ( ResponseStatus ) =>{
		document.querySelector(".show-errors p").innerText=ResponseStatus;
	};

	const resetErrorStatus = () =>{
		document.querySelector(".show-errors p").innerText='';
	};

	setInterval(()=>{
		updateMessagesAndUsers();
	},5000);
	removeRefreshButton();
	disableSendFormPost();
	sendCheck();
	loginCheck();
	sendMessage();
})();

