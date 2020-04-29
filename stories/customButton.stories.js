import React from 'react';
import BigButton from '../comps/big-buttons';
import NextArrow from '../comps/NextArrow';
import BackArrow from '../comps/BackArrow';
import Header from '../comps/Header'
import TutorialSteps from '../comps/tutorial-steps'
import SmallButton from '../comps/small-buttons';
import SoundButton from '../comps/sound-buttons';
import Subheader from '../comps/Subheader';
import QuizPage from '../pages/QuizPage';
import QuizResultsPage from '../pages/QuizResultsPage';

export default {
    title: 'My Comps',
    component:BigButton,
};

export const MyBigButton = () => <BigButton />

export const MyNextArrow = () => <NextArrow />

export const MyBackArrow = () => <BackArrow />


export const MyHeader = () => <Header 
    color="green"
/>
      
export const MySmallButton = () => <SmallButton />

export const MySoundButton = () => <SoundButton />

export const MyHeader1 = () => <Header />

export const MySubheader = () => <Subheader />

export const MyTutorialSteps = () => <TutorialSteps 
    text1="Step 1"
    text2="Select an area on the map to learn about animals from that area"
    text3="Step 2"
    text4="Select the level of endangerment"
    text5="Step 3"
    text6="Select predator or prey"
    text7="Step 4"
    text8="Learn about the animal"
    text9="Step 5"
    text10="Do a fun quiz!"
    fontWeight="bold"
/>

export const MyAnimalInfo = () => <AnimalInfo 
    text1="Population in Wild:"
    text2="22,000 - 31,000"
    text3="Location/Habitat:"
    text4="Countries that circle the Arctic Ring (Canada, Russia, Greenland, etc.)"
    text5="Diet:"
    text6="Mainly eats different types of seals depending on location"
    text7="Fun Fact:"
    text8="Polar bears have black skin and their fur is actually transparent"
    fontWeight="light"
/>


export const MyAnimalQuiz = () => <AnimalQuiz 
    text1="Q1. Where do polar bears not live?"
    text2="Canada"
    text3="Russia"
    text4="England"
    text5="USA"
/>

export const MyQuizResults = () => <QuizResults 
    text1="Q1. Where do polar bears not live?"
    text2="England"
    color="green"
/>

export const MyQuizPage = () => <QuizPage />

export const MyResultsPage = () => <QuizResultsPage />
