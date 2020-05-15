import React, {useState, useEffect} from 'react';
import './style.css';

const False = require ('../../Imgs/X-img.svg');

const QuizFalse = ({onClick}) => 
    <div>
        <img className='image' src={False} onClick={onClick}/>
    </div>

QuizFalse.defaultProps = {
    onClick: ''
}

export default QuizFalse