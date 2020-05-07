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

const TigerPage = () => 

<div className='entire_animalinfo'>
    <div className='animal_header'>
        <Header color='#0d6d0d' text='Sunda Tiger' fontSize='25pt'/>
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
        text2="Less than 400"
        text3="Location/Habitat:"
        text4="Only found on the Indonesian Island of Sumatra, habitats range from lowland forests to mountain forests, including evergreen, swamp, and tropical rainforests."
        text5="Diet:"
        text6="They will eat whatever they can catch including fish, crocodiles, fowl, deer and wild pigs."
        text7="Fun Fact:"
        text8="Also known as Sumatran tigers, they are the smallest known tiger subspecies!"
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


export default TigerPage