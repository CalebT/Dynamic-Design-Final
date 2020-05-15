import React from 'react';
import Header from '../../comps/Header';
import AnimalQuiz from '../../comps/animal-quiz';
import SmallButton from '../../comps/small-buttons';
import './quiz-page.css';
import Router from 'next/router';
import QuizFalse from '../../comps/QuizFalse';
import QuizTrue from '../../comps/QuizTrue';
import SidebarMenu from '../../comps/Menu/index'


function ClickNext() {
    Router.push("/KoalaQuizPage2")
}

function ClickBack() {
    Router.push("/KoalaPage")
}

function ClickTrue() {
    document.querySelector(".incorrect").style.display = "flex";
    document.querySelector(".correct").style.display = "none";
}

function ClickFalse() {
    document.querySelector(".incorrect").style.display = "none";
    document.querySelector(".correct").style.display = "flex";
}

const QuizPage = () => 
    <div id="quizpage">
        <SidebarMenu/>
        <div className="header-box">
            <Header 
            text="Koala Quiz"
            fontSize="23pt"
            color="green"
            />
        </div>

        <div className="quiz-question">
            <AnimalQuiz 
            question="Q2. Koalas hate the taste of eucalyptus leaves and don't like to eat it?"
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