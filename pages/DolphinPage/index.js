import React from 'react'
import './animalpage.css'
import AnimalInfo from '../../comps/animal-info/index'
import Header from '../../comps/Header/index'
import BackArrow from '../../comps/BackArrow/index'
import NextArrow from '../../comps/NextArrow/index'
import Animalimg from '../../comps/Animalimgs/animalimgs'
import SmallButton from '../../comps/small-buttons/index'
import SoundButton from '../../comps/sound-buttons/index'
import Router from 'next/router';

function ClickQuiz() {
    Router.push("/QuizPage")
}

function ClickBack() {
    Router.push("/Amvpage")
}

const DolphinPage = () => 

<div className='entire_animalinfo'>
    <div className='animal_header'>
        <Header color='#0d6d0d' text='Ganges River Dolphin' fontSize='25pt'/>
    </div>
    <div className='animal_img'>
        <BackArrow />
        <Animalimg />
        <NextArrow />
    </div>
    <div className='animal_sound'>
        <p id='sound'>Sound: </p>
        <SoundButton />
    </div>
    <div className='info'>
        <AnimalInfo 
        text1="Population in Wild:"
        text2="1,200 – 1,800"
        text3="Location/Habitat:"
        text4="The Ganges River Dolphin is most commonly found in the Ganges-Brahmaputra-Meghna and Karnaphuli-Sangu river systems of Bangladesh and India."
        text5="Diet:"
        text6="They eat a large variety of fish and invertebrate animals, but have also been known to eat birds and turtles."
        text7="Fun Fact:"
        text8="They are essentially blind, and hunt by emitting ultrasonic sounds, also known as echolocation!"
        fontWeight="light"
        />
    </div>
    <div className='footer_button1'>
        <SmallButton text='Back'
        onClick={ClickBack}/>
    </div>
    <div className='footer_button2'>
        <SmallButton text='Quiz'
        onClick={ClickQuiz}
        />
    </div>
    
</div>


export default DolphinPage