const splitLines = (text)=>{
    if(!text) return;
    const str = text.replace(/(?:\r\n|\r|\n)/g, '<br/>');
    return { __html:str};
};

export default splitLines;