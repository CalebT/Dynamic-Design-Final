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
    Router.push("/CraneQuizPage1")
}

function ClickBack() {
    Router.push("/Amepage")
}

const CranePage = () => 

<div className='entire_animalinfo'>
    <div className='animal_header'>
        <Header color='#0d6d0d' text='Whooping Crane' fontSize='25pt'/>
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
        text2="Approximately 500"
        text3="Location/Habitat:"
        text4="Wetland and shallows throughout Canada and the United States."
        text5="Diet:"
        text6="They are omnivorous birds meaning they eat both plants and other animals. They often eat small crustaceans, snails, and aquatic insects, but they also will feed on grains such as wheat and barley."
        text7="Fun Fact:"
        text8="They are the tallest bird in North America at 5 ft tall, with a wingspan up about 7.5 ft."
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


export default CranePage