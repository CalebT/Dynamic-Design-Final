import React, {useState, useEffect} from 'react';
import './animal-quiz.css';

<link href="https://fonts.googleapis.com/css2?family=Londrina+Solid&family=Rubik:wght@300;400&display=swap" rel="stylesheet"></link>


const AnimalQuiz = ({text1, text2, text3, text4, text5, fontSize, fontWeight, }) => <div
    className="animal-quiz" style={{fontSize:fontSize}}>
    <p >
        <span className="question" style={{fontWeight:fontWeight}}>{text1}</span>
    </p>
    <p><input type="checkbox" /> {text2}</p>
    <p><input type="checkbox" /> {text3}</p>
    <p><input type="checkbox" /> {text4}</p>
    <p><input type="checkbox" /> {text5}</p>

</div>

AnimalQuiz.defaultProps = {
    text1:"Question",
    text2:"answer",
    text3:"answer",
    text4:"answer",
    text5:"answer",
    fontSize: 21,
    fontWeight:"regular"
}

export default AnimalQuiz;