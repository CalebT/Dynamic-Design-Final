import React from 'react';
import Header from '../../comps/Header';
import AnimalQuiz from '../../comps/animal-quiz';
import SmallButton from '../../comps/small-buttons';
import './quiz-page.css';
import Router from 'next/router';
import QuizFalse from '../../comps/QuizFalse';
import QuizTrue from '../../comps/QuizTrue';

function ClickSubmit() {
    Router.push("/QuizResultsPage")
}

function ClickBack() {
    Router.push("/PolarBearpage")
}

const QuizPage = () => 
    <div id="quizpage">
        <span >
            menu
        </span>
        <div className="header">
            <Header 
            text="Polar Bear Quiz"
            fontSize="23pt"
            color="green"
            />
        </div>

        <div className="quiz-question">
            <AnimalQuiz 
            question="Do polar bears live in England?"
            fontSize="36pt"
            />
        </div>

            <button className="False">
                <QuizFalse />
            </button>
            
            <button className="True">
                <QuizTrue />
            </button>

        <div className="button-container">
            <div className="button1">
            <SmallButton 
            text="Back"
            onClick={ClickBack}
            />
            </div>
            
            <div className="button2">
            <SmallButton 
            text="Submit"
            onClick={ClickSubmit}
            />
            </div>
        </div>

    </div>

export default QuizPage;