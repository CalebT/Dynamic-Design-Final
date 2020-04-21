import React, {useState, useEffect} from 'react';
import './small-button.css';

<link href="https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap" rel="stylesheet"></link>

//made the UI
const SmallButton = ({text, color, onClick}) => <div 
    style={{backgroundColor:color, boxShadow:"2px 1px 5px black"}}
    className="custom_button_box-small"
    onClick={onClick}>
    <div className="custom_button_box_inner-small">
        {text}
    </div>
</div>


SmallButton.defaultProps = {
    text:"Default Button",
    color:"#FFF",
    onClick:"",
}
export default SmallButton;