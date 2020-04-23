import React, {useState, useEffect} from 'react';
import './quiz-results.css';

<link href="https://fonts.googleapis.com/css2?family=Londrina+Solid&family=Rubik:wght@300;400&display=swap" rel="stylesheet"></link>


const QuizResults = ({text1, text2, fontSize, fontWeight, color}) => <div
    className="quiz-results" style={{fontSize:fontSize}}>
    <p >
        <span className="question" style={{fontWeight:fontWeight}}>{text1}</span>
    </p>
    <p style={{color:color}}><input type="checkbox"/> {text2}</p>


</div>

QuizResults.defaultProps = {
    text1:"Question",
    text2:"answer",
    fontSize: 21,
    fontWeight:"regular",
    color:""
}

export default QuizResults;