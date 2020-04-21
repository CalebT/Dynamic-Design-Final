import React, {useState, useEffect} from 'react';
import './sound-buttons.css';
import { lolosPlay } from "react-icons/io";

<link href="https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap" rel="stylesheet"></link>

//made the UI
const SoundButton = ({text, color, onClick}) => <div 
    style={{backgroundColor:color, boxShadow:"2px 1px 5px black"}}
    className="custom_button_box_sound"
    onClick={onClick}>
    <div className="custom_button_box_inner_sound">
        <lolosPlay />
    </div>
    
</div>



SoundButton.defaultProps = {
    text:"",
    color:"#FFF",
    onClick:"",
}
export default SoundButton;