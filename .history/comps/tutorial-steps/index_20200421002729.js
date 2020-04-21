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
    text1:"Step 1",
    text2="Select an area on the map to learn about animals from that area",
    text3:"Step 2",
    text4:"Select the level of endangerment",
    text5:"Step 3",
    text6:"Select predator or prey",
    text7:"Step 4",
    text8:"Learn about the animal",
    text9:"Step 5",
    text10:"Do a fun quiz!",
    fontWeight:"bold",
}

export default TutorialSteps;