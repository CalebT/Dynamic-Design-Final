import React from 'react';
import Header from '../../comps/Header';
import SmallButton from '../../comps/small-buttons';
import './quiz-results-page.css';
import SpecialButton from '../../comps/special-button';
import Router from 'next/router';

function ClickMap() {
    Router.push("/Worldmappage")
}

function ClickTryAgain() {
    Router.push("/GibbonQuizPage1")
}

const QuizResultsPage = () => 
    <div id="quizpage">
        <span >
            menu
        </span>

        <div class="quiz-results-amount">
            <Header 
            text="Good Job! You finished the quiz!"
            color="green"
            fontSize="22pt"
            />
        </div>

        <a className="LinkButton" href="https://www.worldwildlife.org/how-to-help" target="_blank"> 
            <SpecialButton 
            text="Click here to learn about how you can help endangered animals!"
            />
        </a>

        <div class="button-container-results">
            <div className="button1">
            <SmallButton 
            text="Try Again"
            onClick={ClickTryAgain}
            />
            </div>
                
            <div className="button2">
            <SmallButton 
            text="World Map"
            onClick={ClickMap}
            />
            </div>
        </div>
    </div>

export default QuizResultsPage;