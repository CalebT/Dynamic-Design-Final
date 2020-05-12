import React, {useState, useEffect} from 'react';
import './animal-quiz.css';

const AnimalQuiz = ({question, fontSize, fontWeight, onClick}) => <div
    className="animal-quiz" style={{fontSize:fontSize}}>
    <p >
        <span className="question" style={{fontWeight:fontWeight}}>{question}</span>
    </p>
</div>

AnimalQuiz.defaultProps = {
    fontSize: 21,
    fontWeight:"bold",
    onClick:''
}

export default AnimalQuiz;