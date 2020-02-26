(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(20)},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=(a(18),a(2)),c=a(5),l=a(6),u=a(7),d=a(10),m=a(8),h=a(11),p=a(1),f=(a(19),function(e){var t=e.topics,a=e.joinNewTopicDiscussion;if(!t)return"";var n=Object.values(t).map(function(e){return r.a.createElement("li",{key:e.key,onClick:function(){return a({key:e.key})}},r.a.createElement("div",{className:"topics"},r.a.createElement("div",{className:"topics-title"},r.a.createElement("p",null,"Title: ",e.title)),r.a.createElement("div",{className:"meta-info"},r.a.createElement("div",{className:"sender-info"},r.a.createElement("span",{className:"username"},"by ",e.sender)),r.a.createElement("div",{className:"message-info"},r.a.createElement("span",{className:"timestamp"},new Date(e.timestamp).toDateString())),r.a.createElement("div",{className:"replies-info"},r.a.createElement("span",{className:"replies-nums"},"Replies: ",e.topicChat.messages.length)))))});return r.a.createElement("ul",{className:"topics-list"},n)}),g=function(e){e.allUsers;var t=e.allTopics,a=e.topicChatInfo,n=e.handleTopicChatSubmit,i=e.handleTopicChatChange,o=e.topicChatdisabled,s=e.joinNewTopicDiscussion;return r.a.createElement("div",{className:"chat-app"},r.a.createElement("div",{className:"display-panel"},r.a.createElement(f,{topics:t,topicChatInfo:a,handleSubmit:n,handleChange:i,disabled:o,joinNewTopicDiscussion:s})))},v=function(e){var t=e.errorMessage;if(!t)return r.a.createElement("div",{className:"show-errors"});var a=0,n=Object.values(t).map(function(e){return r.a.createElement("li",{key:a++},r.a.createElement("div",{className:"error-message"},r.a.createElement("span",{className:"error"},e.toString())))});return r.a.createElement("div",{className:"show-errors"},r.a.createElement("ul",{className:"show-errors-list"},n))},E=function(e){var t=e.updateSender,a=e.value,n=e.disabled,i=e.handleSubmit;return r.a.createElement("div",{className:"login"},r.a.createElement("form",null,r.a.createElement("input",{name:"username",placeholder:"Enter Username",value:a,onChange:function(e){return t(e.target.value)}}),r.a.createElement("button",{onClick:function(e){return i(e)},disabled:n},"Login")))},b=function(e){var t=e.username;return r.a.createElement("div",{className:"greeting"},r.a.createElement("p",{className:"greeting"},"Hi, ",t))},T=function(e){var t=e.logout;return r.a.createElement("div",{className:"logout"},r.a.createElement("button",{onClick:t},"Logout"))},y=function(e){var t=e.updateSender,a=e.value,n=e.handleSubmit,i=e.disabled,o=e.isLogged,s=e.logout,c=e.backToMainPage,l=e.gotoNewTopicPage;return r.a.createElement("div",{className:"navigation-bar"},r.a.createElement("div",{className:"all-links"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",{className:"back-to-mainpage",onClick:function(){return c()}},"Main Page")),r.a.createElement("li",null,r.a.createElement("p",{className:"new-topic",onClick:function(){return l()}},"New topic")))),o?r.a.createElement("div",{className:"login-status-div"},r.a.createElement(b,{username:o}),r.a.createElement(T,{logout:s})):r.a.createElement("div",{className:"login-status-div"},r.a.createElement(E,{updateSender:t,value:a,handleSubmit:n,disabled:i})))},S=a(9),k=a.n(S),C=function(){return r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:k.a,alt:"Logo"}))},N=function(e){var t=e.topicChatInfo,a=e.handleSubmit,n=e.handleChange,i=(e.keyPress,e.disabled),o=e.topicId;return r.a.createElement("div",{className:"reply-outgoing"},r.a.createElement("label",null,"Reply to this Topic:"),r.a.createElement("textarea",{className:"to-send-message",value:t,placeholder:"Enter message to send",onChange:function(e){return n(e)}}),r.a.createElement("button",{disabled:i,onClick:function(e){return a({e:e,topicId:o})}},"Send"))},j=function(e){if(e)return{__html:e.replace(/(?:\r\n|\r|\n)/g,"<br/>")}},w=function(e){var t=e.messages,a=0,n=t.map(function(e){return r.a.createElement("li",{key:a++},r.a.createElement("div",{className:"discussion"},r.a.createElement("div",{className:"meta-info"},r.a.createElement("div",{className:"sender-info"},r.a.createElement("span",{className:"username"},e.sender)),r.a.createElement("div",{className:"message-info"},r.a.createElement("span",{className:"timestamp"},new Date(e.timestamp).toDateString()))),r.a.createElement("p",{className:"message-text",dangerouslySetInnerHTML:j(e.text)})))});return r.a.createElement("div",{className:"disscussions"},r.a.createElement("ul",{className:"disscussions-list"},n))},P=function(e){var t=e.title,a=e.sender,n=e.timestamp,i=e.topicText;return r.a.createElement("div",{className:"topic-details"},r.a.createElement("div",{className:"topic-title"},r.a.createElement("h1",null,t)),r.a.createElement("div",{className:"topic-Info"},r.a.createElement("div",{className:"topic-meta-info"},r.a.createElement("div",{className:"sender-info"},r.a.createElement("span",{className:"username"},a)),r.a.createElement("div",{className:"message-info"},r.a.createElement("span",{className:"timestamp"},new Date(n).toDateString()))),r.a.createElement("p",{className:"message-text",dangerouslySetInnerHTML:j(i)})))},O=function(e){var t=e.topic,a=e.topicChatInfo,n=e.handleTopicChatSubmit,i=e.handleTopicChatChange,o=e.topicChatdisabled;return t?r.a.createElement("div",{className:"chat-app"},r.a.createElement("div",{className:"display-panel"},r.a.createElement(P,{title:t.title,sender:t.sender,timestamp:t.timestamp,topicText:t.text}),r.a.createElement(w,{messages:t.topicChat.messages})),r.a.createElement("div",{className:"send-panel"},r.a.createElement(N,{topicChatInfo:a,handleSubmit:n,handleChange:i,disabled:o,topicId:t.key}))):""},I=function(e){var t=e.title,a=e.handleTitleChange,n=e.topicInfo,i=e.handleSubmit,o=e.handleChange,s=(e.keyPress,e.disabled);return r.a.createElement("div",{className:"send-panel"},r.a.createElement("div",{className:"outgoing"},r.a.createElement("p",null,"Reminder: Please fill in both title and topic details. ^v^"),r.a.createElement("div",{className:"outgoing-title"},r.a.createElement("label",null,"Title:"),r.a.createElement("input",{className:"to-send-title",onChange:function(e){return a(e)},value:t,placeholder:"Enter title to send"})),r.a.createElement("div",{className:"outgoing-topic"},r.a.createElement("label",null,"Topic:"),r.a.createElement("textarea",{className:"to-send-message",value:n,placeholder:"Enter message to send",onChange:function(e){return o(e)}})),r.a.createElement("button",{disabled:s,onClick:i},"Send")))},D=function(){return r.a.createElement("div",{className:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},M=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={title:"",topicInfo:"",topicChatInfo:"",tempsender:"",currentPage:"main"},e.backToMainPage=e.backToMainPage.bind(Object(p.a)(Object(p.a)(e))),e.handleChange=e.handleChange.bind(Object(p.a)(Object(p.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(p.a)(Object(p.a)(e))),e.handleLoginSubmit=e.handleLoginSubmit.bind(Object(p.a)(Object(p.a)(e))),e.handleTitleChange=e.handleTitleChange.bind(Object(p.a)(Object(p.a)(e))),e.handleTopicChatChange=e.handleTopicChatChange.bind(Object(p.a)(Object(p.a)(e))),e.handleTopicChatSubmit=e.handleTopicChatSubmit.bind(Object(p.a)(Object(p.a)(e))),e.joinNewTopicDiscussion=e.joinNewTopicDiscussion.bind(Object(p.a)(Object(p.a)(e))),e.updateSender=e.updateSender.bind(Object(p.a)(Object(p.a)(e))),e.currentPage=e.currentPage.bind(Object(p.a)(Object(p.a)(e))),e.logout=e.logout.bind(Object(p.a)(Object(p.a)(e))),e.gotoNewTopicPage=e.gotoNewTopicPage.bind(Object(p.a)(Object(p.a)(e))),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"backToMainPage",value:function(){var e=this;this.showloading(),this.updateTopicsState(),setTimeout(function(){e.setState({topic:"",currentPage:"main",error:""})},500)}},{key:"updateSender",value:function(e){e&&this.setState({tempsender:e})}},{key:"getStateError",value:function(){return this.state.error}},{key:"setStateError",value:function(e){var t=e.err,a=e.errorType;a&&this.setState(function(e){return{error:Object(c.a)({},e.error,Object(s.a)({},a,t))}})}},{key:"handleLoginSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state.tempsender;!function(e){var t=e.username,a=e.callback;fetch("/login/".concat(t),{method:"POST",headers:new Headers({"content-type":"application/json"})}).catch(function(e){return Promise.reject({err:e,errorType:"service-error"})}).then(function(e){if(!e.ok)return e.json();a({err:"",errorType:"LoginError"})}).then(function(e){if(e)throw new Error(e.error)}).catch(function(e){return a({err:e,errorType:"LoginError"})})}({username:a,callback:function(e){var a=e.err,n=e.errorType;t.setStateError({err:a,errorType:n})}}),this.setState({sender:a,tempsender:""})}},{key:"handleTitleChange",value:function(e){this.setState({title:e.target.value})}},{key:"handleChange",value:function(e){this.setState({topicInfo:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),this.state.topicInfo){var a=this.state.sender,n=this.state.topicInfo;(function(e){var t=e.title,a=e.username,n=e.text,r=e.callback;return fetch("/topics/",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({title:t,username:a,text:n})}).catch(function(e){return Promise.reject({err:e,errorType:"service-error"})}).then(function(e){return e.ok?(r({err:"",errorType:"sendMessageError"}),e.json()):e.json()}).then(function(e){if(e.error)throw new Error(e.error);return e.topicId}).catch(function(e){return r({err:e,errorType:"sendMessageError"})})})({title:this.state.title,username:a,text:n,callback:function(e){var a=e.err,n=e.errorType;t.setStateError({err:a,errorType:n})}}).then(function(e){e&&(t.joinNewTopicDiscussion({key:e}),t.setState({topicInfo:"",title:""}))})}}},{key:"updateUsersState",value:function(){var e=this;(function(e){var t=e.callback;return fetch("/users/").catch(function(e){return Promise.reject({err:e,errorType:"service-error"})}).then(function(e){if(e.ok)return t({err:"",errorType:"updateUserError"}),e.json();throw new Error("Couldn't get User data!")}).catch(function(e){return t({err:e,errorType:"updateUserError"})})})({callback:function(t){var a=t.err,n=t.errorType;e.setStateError({err:a,errorType:n})}}).then(function(t){e.setState({allUsers:t})})}},{key:"updateTopicsState",value:function(){var e=this;(function(e){var t=e.callback;return fetch("/topics/").catch(function(e){return Promise.reject({err:e,errorType:"service-error"})}).then(function(e){if(e.ok)return t({err:"",errorType:"UpdateMessageError"}),e.json();throw new Error("Couldn't get Message data!")}).catch(function(e){return t({err:e,errorType:"UpdateMessageError"})})})({callback:function(t){var a=t.err,n=t.errorType;e.setStateError({err:a,errorType:n})}}).then(function(t){e.setState({allTopics:t})})}},{key:"getAllUsersAndTopics",value:function(){this.updateUsersState(),this.updateTopicsState()}},{key:"logout",value:function(){var e=this;!function(e){var t=e.username,a=e.callback;fetch("/logout/".concat(t),{method:"POST",headers:new Headers({"content-type":"application/json"})}).catch(function(e){return Promise.reject({err:e,errorType:"service-error"})}).then(function(e){if(!e.ok)return e.json();a({err:"",errorType:"LogoutError"})}).then(function(e){if(e)throw new Error(e.error)}).catch(function(e){return a({err:e,errorType:"LogoutError"})})}({username:this.state.sender,callback:function(t){var a=t.err,n=t.errorType;e.setStateError({err:a,errorType:n})}}),delete this.state.sender,this.setState(this.state)}},{key:"componentDidMount",value:function(){var e=this;this.getAllUsersAndTopics(),setInterval(function(){e.state.topic?e.updateTopicDiscussion({key:e.state.topic.key}):e.getAllUsersAndTopics()},5e3)}},{key:"checkDisabled",value:function(){return!this.state.topicInfo}},{key:"handleTopicChatSubmit",value:function(e){var t=this,a=e.e,n=e.topicId;a.preventDefault();(function(e){var t=e.username,a=e.text,n=e.topicId,r=e.callback;return fetch("/topicDiscussion/".concat(n),{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({username:t,text:a})}).catch(function(e){return Promise.reject({err:e,errorType:"service-error"})}).then(function(e){return e.ok?(r({err:"",errorType:"SendDisscussionError"}),JSON.stringify({isloading:!0})):e.json()}).then(function(e){if(e.error)throw new Error(e.error);return e}).catch(function(e){return r({err:e,errorType:"SendDisscussionError"})})})({username:this.state.sender,text:this.state.topicChatInfo,topicId:n,callback:function(e){var a=e.err,n=e.errorType;t.setStateError({err:a,errorType:n})}}).then(function(e){e&&(t.updateTopicDiscussion({key:n}),t.showloading(),setTimeout(function(){t.setState({currentPage:"topicDiscussion",topicChatInfo:"",error:""})},500))})}},{key:"handleTopicChatChange",value:function(e){this.setState({topicChatInfo:e.target.value})}},{key:"showloading",value:function(){this.setState({error:"",currentPage:"loading"})}},{key:"joinNewTopicDiscussion",value:function(e){var t=this,a=e.key;a&&(this.showloading(),setTimeout(function(){return t.updateTopicDiscussion({key:a})},1e3))}},{key:"updateTopicDiscussion",value:function(e){var t=this,a=e.key;if(a){(function(e){var t=e.topicId,a=e.callback;return fetch("/topicDiscussion/".concat(t)).catch(function(e){return Promise.reject({err:e,errorType:"service-error"})}).then(function(e){if(e.ok)return a({err:"",errorType:"UpdateDisscussionError"}),e.json();throw new Error("Couldn't get Disscussion data!")}).catch(function(e){return a({err:e,errorType:"UpdateDisscussionError"})})})({topicId:a,callback:function(e){var a=e.err,n=e.errorType;t.setStateError({err:a,errorType:n})}}).then(function(e){t.setState({topic:e,currentPage:"topicDiscussion"})})}}},{key:"currentPage",value:function(){return"topicDiscussion"===this.state.currentPage?r.a.createElement(O,{topic:this.state.topic,topicChatInfo:this.state.topicChatInfo,handleTopicChatSubmit:this.handleTopicChatSubmit,handleTopicChatChange:this.handleTopicChatChange,topicChatdisabled:!this.state.topicChatInfo}):"newTopic"===this.state.currentPage?r.a.createElement(I,{title:this.state.title,handleTitleChange:this.handleTitleChange,topicInfo:this.state.topicInfo,handleSubmit:this.handleSubmit,handleChange:this.handleChange,disabled:!this.state.title||!this.state.topicInfo}):"main"===this.state.currentPage?r.a.createElement(g,{allUsers:this.state.allUsers,allTopics:this.state.allTopics,joinNewTopicDiscussion:this.joinNewTopicDiscussion,topicChatInfo:this.state.topicChatInfo,handleTopicChatSubmit:this.handleTopicChatSubmit,handleTopicChatChange:this.handleTopicChatChange,topicChatdisabled:!this.state.topicChatInfo}):"loading"===this.state.currentPage?r.a.createElement(D,null):void 0}},{key:"gotoNewTopicPage",value:function(){this.setState({currentPage:"newTopic",topic:"",error:""})}},{key:"render",value:function(){return r.a.createElement("div",{id:"chat-app"},r.a.createElement(C,null),r.a.createElement(y,{updateSender:this.updateSender,value:this.state.tempsender,handleSubmit:this.handleLoginSubmit,disabled:!this.state.tempsender,isLogged:this.state.sender,logout:this.logout,backToMainPage:this.backToMainPage,gotoNewTopicPage:this.gotoNewTopicPage}),this.currentPage(),r.a.createElement("div",{className:"error-report"},r.a.createElement(v,{errorMessage:this.state.error})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a.p+"static/media/logo.f5b14d15.jpg"}},[[12,1,2]]]);
//# sourceMappingURL=main.d24b49a2.chunk.js.map