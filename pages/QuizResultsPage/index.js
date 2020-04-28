import React from 'react';
import Header from '../../comps/Header';
import QuizResults from '../../comps/quiz-results';
import SmallButton from '../../comps/small-buttons';
import BigButton from '../../comps/big-buttons';
import './quiz-results-page.css';
import SpecialButton from '../../comps/special-button';


const QuizResultsPage = () => 
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
            <QuizResults 
            fontSize="18"
            text1="Q1. Where do polar bears NOT live?"
            text2="England"
            color="green"
            />
        </div>

        <div class="quiz-question">
            <QuizResults 
            fontSize="18"
            text1="Q2. How endangered are polar bears?"
            text2="Vulnerable"
            color="green"
            />
        </div>

        <div class="quiz-question">
            <QuizResults 
            fontSize="18"
            text1="Q3. Where do polar bears not eat?"
            text2="Sushi"
            color="green"
            />
        </div>

        <div class="quiz-results-amount">
            <Header 
            text="You got 3/3 Good Job!"
            color="green"
            fontSize="22pt"
            />
        </div>

        <div> 
            <SpecialButton 
            text="Learn about how you can help
            endangered animals and our world at <"
            />
        </div>

        <div class="button-container-results">
            <div>
            <SmallButton 
            text="Back"
            />
            </div>
                
            <div class="submit-button">
            <SmallButton 
            text="Submit"
            />
            </div>
        </div>
    </div>

export default QuizResultsPage;