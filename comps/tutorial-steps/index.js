import React, {useState, useEffect} from 'react';
import './tutorial-steps.css';

<link href="https://fonts.googleapis.com/css2?family=Londrina+Solid&family=Rubik:wght@300;400&display=swap" rel="stylesheet"></link>


const TutorialSteps = ({text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, fontSize1, fontSize2, color, fontWeight, }) => <div
    className="tut-steps">
    <p className="tut-header" style={{fontSize:fontSize1, fontWeight:fontWeight}}>
        {text1}
    </p>
    <p style={{fontSize:fontSize2}}>
        {text2}
    </p>

    <p className="tut-header" style={{fontSize:fontSize1, fontWeight:fontWeight}}>
        {text3}
    </p>
    <p style={{fontSize:fontSize2}}>
        {text4}
    </p>

    <p className="tut-header" style={{fontSize:fontSize1, fontWeight:fontWeight}}>
        {text5}
    </p>
    <p style={{fontSize:fontSize2}}>
        {text6}
    </p>

    <p className="tut-header" style={{fontSize:fontSize1, fontWeight:fontWeight}}>
        {text7}
    </p>
    <p style={{fontSize:fontSize2}}>
        {text8}
    </p>

    <p className="tut-header" style={{fontSize:fontSize1, fontWeight:fontWeight}}>
        {text9}
    </p>
    <p style={{fontSize:fontSize2}}>
        {text10}
    </p>
</div>

TutorialSteps.defaultProps = {
    fontWeight:"",
    text1:"header",
    text2:"dummy text",
    text3:"header",
    text4:"dummy text",
    text5:"header",
    text6:"dummy text",
    text7:"header",
    text8:"dummy text",
    fontSize1:37,
    fontSize2: 30,
    color:"#000",
    fontWeight:"",
}

export default TutorialSteps;