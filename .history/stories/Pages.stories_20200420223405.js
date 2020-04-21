import React from 'react';
import Homepage from '../pages/Homepage/homepage';
import AnimalPage from '../pages/Animalpage/animalpage';

export default {
    title: 'pages',
    component: Homepage,
    component: AnimalPage,
}



export const MyHomepage = () => <Homepage />
export const MyAnimalPage = () => <AnimalPage />