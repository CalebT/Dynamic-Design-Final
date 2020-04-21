import React, {useState, useEffect} from 'react';
import './small-buttons.css';
import { lolosPlay } from "react-icons/io";

<link href="https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap" rel="stylesheet"></link>

//made the UI
const SmallButton = ({text, color, onClick}) => <div 
    style={{backgroundColor:color, boxShadow:"2px 1px 5px black"}}
    className="custom_button_box_small"
    onClick={onClick}>
    <div className="custom_button_box_inner_small">
        {text}
    </div>
    
</div>

class Question extends React.Component {
    render() {
      return <h3> Lets go for a <FaBeer />? </h3>
    }
  }

SmallButton.defaultProps = {
    text:"Default Button",
    color:"#FFF",
    onClick:"",
}
export default SmallButton;