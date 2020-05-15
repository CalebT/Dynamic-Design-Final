import React, {useState, useEffect} from 'react';
import './header.css';

<link href="https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap" rel="stylesheet"></link>

const Header = ({text, fontSize, color, fontFamily,boxShadow }) => <div
    style={{color:color, fontSize:fontSize}}
    className="header">
    <h1 style={{fontSize:fontSize}, {fontFamily:fontFamily}, {boxShadow}}>
        {text}
    </h1>
</div>

Header.defaultProps = {
    fontSize:40,
    color:"#000",
    text:"Header",
    boxShadow:""
    
}

export default Header;