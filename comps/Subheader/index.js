import React, {useState, useEffect} from 'react';
import './subheader.css';

<link href="https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap" rel="stylesheet"></link>

const Subheader = ({text, fontSize, color, fontFamily}) => <div
    style={{color:color, fontSize:fontSize}}
    className="subheader">
    <h1 style={{fontSize:fontSize}, {fontFamily:fontFamily}}>
        {text}
    </h1>
</div>

Subheader.defaultProps = {
    fontSize:30,
    color:"#000",
    text:"Subheader",
}

export default Subheader;