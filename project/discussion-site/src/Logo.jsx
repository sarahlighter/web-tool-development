import React from 'react';
import logoImage from './image/logo.jpg';
const Logo = ()=>{
  return(
    <div className="logo">
          <img src={logoImage} alt="Logo"/>
    </div>
  );  
};

export default Logo;