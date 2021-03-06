import React from 'react';
import Homepage from '../pages/Homepage/homepage';
import AnimalPage from '../pages/Animalpage/animalpage';
import TutorialPage from '../pages/Tutorialpage/tutorialpage';
import LoeamPage from '../pages/Loeampage/loeampage';
import AmvPage from '../pages/Amvpage/amvpage';
import LoeafPage from '../pages/Loeafpage/loeafpage';

export default {
    title: 'pages',
    component: Homepage,
    component: AnimalPage,
    component: TutorialPage, 
    component: LoeamPage,
    component: AmvPage,
    component: LoeafPage,
}



export const MyHomepage = () => <Homepage />
export const MyAnimalPage = () => <AnimalPage />
export const MyTutorialPage = () => <TutorialPage />
export const MyLoeamPage = () => <LoeamPage />
export const MyAmvPage = () => <AmvPage />
export const MyLoeafPage = () => <LoeafPage />