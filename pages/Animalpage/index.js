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
    Router.push("/quizpage")
}

function ClickBack() {
    Router.push("/Amvpage")
}

const AnimalPage = () => 

<div className='entire_animalinfo'
onClick={ClickQuiz}>
    <div className='animal_header'>
        <Header color='#0d6d0d' text='Polar Bear' fontSize='25pt'/>
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
        text2="22,000 - 31,000"
        text3="Location/Habitat:"
        text4="Countries that circle the Arctic Ring (Canada, Russia, Greenland, etc.)"
        text5="Diet:"
        text6="Mainly eats different types of seals depending on location"
        text7="Fun Fact:"
        text8="Polar bears have black skin and their fur is actually transparent"
        fontWeight="light"
        />
    </div>
    <div className='footer_button1'>
        <SmallButton text='Back'
        onClick={ClickBack}/>
    </div>
    <div className='footer_button2'>
        <SmallButton text='Quiz'
        />
    </div>
    
</div>


export default AnimalPage