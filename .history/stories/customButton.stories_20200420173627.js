import React from 'react';
import BigButton from '../comps/big-buttons';
import NextArrow from '../comps/NextArrow';
import BackArrow from '../comps/BackArrow';
import SmallButton from '../comps/small-buttons';
import SoundButton from '../comps/sound-buttons';
import Header from '../comps/Header';
import TutorialSteps from '../comps/tutorial-steps';
import AnimalInfo from '../comps/animal-info';
import AnimalQuiz from "../comps/animal-quiz";

export default {
    title: 'My Comps',
    component:BigButton,
};

export const MyBigButton = () => <BigButton />

export const MyNextArrow = () => <NextArrow />

export const MyBackArrow = () => <BackArrow />

<<<<<<< HEAD
export const MySmallButton = () => <SmallButton />

export const MySoundButton = () => <SoundButton />
=======
export const MyHeader = () => <Header />

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

export const MyAnimalQuiz = () => <AnimalQuiz />
>>>>>>> e066ba23eab9246879af22ef51d3e1fbd0e66f7a
