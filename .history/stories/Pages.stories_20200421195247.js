import React from 'react';
import Homepage from '../pages/Homepage/homepage';
import AnimalPage from '../pages/Animalpage/animalpage';
import TutorialPage from '../pages/Tutorialpage/tutorialpage';
import LoeamPage from '../pages/Loeampage/loeampage';
import AmvPage from '../pages/Amvpage/amvpage';
import LoeafPage from '../pages/Loeafpage/loeafpage';
import LoeasPage from '../pages/Loeaspage/loeaspage';
import LoeauPage from '../pages/Loeaupage/loeaupage';

export default {
    title: 'pages',
    component: Homepage,
    component: AnimalPage,
    component: TutorialPage, 
    component: LoeamPage,
    component: AmvPage,
    component: LoeafPage,
    component: LoeasPage,
    component: LoeauPage,
}



export const MyHomepage = () => <Homepage />
export const MyAnimalPage = () => <AnimalPage />
export const MyTutorialPage = () => <TutorialPage />
export const MyLoeamPage = () => <LoeamPage />
export const MyLoeafPage = () => <LoeafPage />
export const MyLoeasPage = () => <LoeasPage />
export const MyLoeauPage = () => <LoeauPage />
export const MyAmvPage = () => <AmvPage />