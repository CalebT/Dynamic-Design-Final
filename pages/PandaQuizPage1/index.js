import React from 'react';
import Header from '../../comps/Header';
import AnimalQuiz from '../../comps/animal-quiz';
import SmallButton from '../../comps/small-buttons';
import './quiz-page.css';
import Router from 'next/router';
import QuizFalse from '../../comps/QuizFalse';
import QuizTrue from '../../comps/QuizTrue';

function ClickNext() {
    Router.push("/PandaQuizPage2")
}

function ClickBack() {
    Router.push("/PandaPage")
}

function ClickTrue() {
    document.querySelector(".incorrect").style.display = "none";
    document.querySelector(".correct").style.display = "flex";
}

function ClickFalse() {
    document.querySelector(".incorrect").style.display = "flex";
    document.querySelector(".correct").style.display = "none";
}

const QuizPage = () => 
    <div id="quizpage">
        <span >
            menu
        </span>
        <div className="header">
            <Header 
            text="Panda Quiz"
            fontSize="23pt"
            color="green"
            />
        </div>

        <div className="quiz-question">
            <AnimalQuiz 
            question="Q1. Can pandas only live where the bamboo they eat grows?"
            fontSize="24pt"
            />
        </div>

        <div className="incorrect">
            <h2>Incorrect</h2>
        </div>

        <div className="correct">
            <h2>Correct!</h2>
        </div>

        <button className="False" onClick={ClickFalse}>
            <QuizFalse />
        </button>
            
        <button className="True" onClick={ClickTrue}>
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
            text="Next"
            onClick={ClickNext}
            />
            </div>
        </div>
    </div>

export default QuizPage;