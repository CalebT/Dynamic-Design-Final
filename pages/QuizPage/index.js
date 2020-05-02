import React from 'react';
import Header from '../../comps/Header';
import AnimalQuiz from '../../comps/animal-quiz';
import SmallButton from '../../comps/small-buttons';
import './quiz-page.css';
import Router from 'next/router';

function ClickSubmit() {
    Router.push("/QuizResultsPage")
}

function ClickBack() {
    Router.push("/Animalpage")
}

const QuizPage = () => 
    <div id="quizpage">
        <span >
            menu
        </span>
        <div class="header">
            <Header 
            text="Polar Bear Quiz"
            fontSize="23pt"
            color="green"
            />
        </div>

        <div class="quiz-question">
            <AnimalQuiz 
            fontSize="18"
            text1="Q2. Where do polar bears NOT live?"
            text2="Canada"
            text3="Russia"
            text4="England"
            text5="USA"
            />
        </div>
        <div class="quiz-question">
            <AnimalQuiz 
            fontSize="18"
            text1="Q2. How endangered are polar bears?"
            text2="Critically endangered"
            text3="Vulnerable"
            text4="Endangered"
            text5="Near threatened"
            />
        </div>

        <div class="quiz-question">
            <AnimalQuiz 
            fontSize="18"
            text1="Q3. What do polar bears NOT eat?"
            text2="Ringed seals"
            text3="Harp seals"
            text4="Whale carcasses"
            text5="Sushi"
            />
        </div>
        <div class="button-container">
            <div>
            <SmallButton 
            text="Back"
            onClick={ClickBack}
            />
            </div>
            
            <div>
            <SmallButton 
            text="Submit"
            onClick={ClickSubmit}
            />
            </div>
        </div>
    </div>

export default QuizPage;