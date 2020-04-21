import React, {useState, useEffect} from 'react';
import './animal-info.css';

<link href="https://fonts.googleapis.com/css2?family=Londrina+Solid&family=Rubik:wght@300;400&display=swap" rel="stylesheet"></link>


const AnimalInfo = ({text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, fontSize, color, fontWeight, }) => <div
    className="animal-info">
    <p style={{fontSize:fontSize}}>
        <span className="info-bold" style={{fontWeight:fontWeight}}>{text1}</span> {text2}
    </p>

    <p style={{fontSize:fontSize}}>
        <span className="info-bold" style={{fontWeight:fontWeight}}>{text3}</span> {text4}
    </p>

    <p style={{fontSize:fontSize}}>
        <span className="info-bold" style={{fontWeight:fontWeight}}>{text5}</span> {text6}
    </p>

    <p style={{fontSize:fontSize}}>
        <span className="info-bold" style={{fontWeight:fontWeight}}>{text7}</span> {text8}
    </p>
</div>

AnimalInfo.defaultProps = {
    fontWeight:"",
    text1:"header",
    text2:"dummy text",
    text3:"header",
    text4:"dummy text",
    text5:"header",
    text6:"dummy text",
    text7:"header",
    text8:"dummy text",
    fontSize: 17,
    color:"#000",
}

export default AnimalInfo;