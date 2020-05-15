import React, {useState, useEffect} from 'react';
import './style.css';

const True = require ('../../Imgs/Check-img.svg');

const QuizTrue = ({onClick}) => 
    <div>
        <img className='image' src={True} onClick={onClick}/>
    </div>

QuizTrue.defaultProps = {
    onClick: ''
}

export default QuizTrue