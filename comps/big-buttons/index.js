import React, {useState, useEffect} from 'react';
import './big-buttons.css';

<link href="https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap" rel="stylesheet"></link>

//made the UI
const BigButton = ({text, color, onClick}) => <div 
    style={{backgroundColor:color, boxShadow:"2px 1px 5px black"}}
    className="custom_button_box"
    onClick={onClick}>
    <div className="custom_button_box_inner">
        {text}
    </div>
</div>


BigButton.defaultProps = {
    text:"Default Button",
    color:"#FFF",
    onClick:"",
}
export default BigButton;