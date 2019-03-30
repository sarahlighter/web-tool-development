import React from 'react';

const chat = {
    users:{
        "Amit": "Amit",
        "Bao": "Bao",
        "Me" :"Me",
    },
    messages:[{
            sender: "Amit",
            timestamp: new Date( "2019-01-01 19:20:00"),
            text: "You up?",
        },
        {
            sender: "Bao",
            timestamp: new Date("2019-01-01 19:21:00"),
            text: "Yeah, still working on this INFO6250 work, but I keep getting distracted by cat videos",
        },
    ],
    addMessage({sender,timestamp, text}){   
        this.messages.push({ sender, timestamp, text });
    },
    
}
export default chat;