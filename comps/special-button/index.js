import React, {useState, useEffect} from 'react';
import './special-button.css';

<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap" rel="stylesheet"></link>

//made the UI
const SpecialButton = ({text, color, onClick}) => <div 
    style={{backgroundColor:color, boxShadow:"2px 1px 5px black"}}
    className="custom_button_box-special"
    onClick={onClick}>
    <div className="custom_button_box_inner-special">
        <p>Learn about how you can help endangered animals and our world at</p>
        <a id="link">https://www.worldwildlife.org/how-to-help</a>
    </div>
</div>


SpecialButton.defaultProps = {
    text:"Default Button",
    color:"#FFF",
    onClick:"",
}
export default SpecialButton;