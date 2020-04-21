import React from 'react';
import Homepage from '../pages/Homepage/homepage';
import AnimalPage from '../pages/Animalpage/animalpage';
import TutorialPage from '../pages/Tutorialpage/tutorialpage';
import Worldmap from '../pages/Worldmappage/worldmap'


export default {
    title: 'pages',
    component: Homepage,
    component: AnimalPage,
    component: TutorialPage,
    component: Worldmap,    
}



export const MyHomepage = () => <Homepage />
export const MyAnimalPage = () => <AnimalPage />
export const MyTutorialPage = () => <TutorialPage />
export const MyMapPage = () => <Worldmap />