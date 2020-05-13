import React, {useState, useEffect} from 'react';
import './menubutton.css';

<link href="https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap" rel="stylesheet"></link>

//made the UI
const MenuButton = ({text, color, onClick}) => <div 
    style={{backgroundColor:color, boxShadow:"2px 1px 5px black"}}
    className="menubuttonbox"
    onClick={onClick}>
    <div className="menubuttonboxinner">
        {text}
    </div>
</div>


MenuButton.defaultProps = {
    text:"Default Button",
    color:"#FFF",
    onClick:"",
}
export default MenuButton;