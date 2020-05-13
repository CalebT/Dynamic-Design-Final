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
    Router.push("/FerretQuizPage1")
}

function ClickBack() {
    Router.push("/Amepage")
}

const FerretPage = () => 

<div className='entire_animalinfo'>
    <div className='animal_header'>
        <Header color='#0d6d0d' text='Black Footed Ferret' fontSize='25pt'/>
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
        text2="Approximately 370"
        text3="Location/Habitat:"
        text4="Due to their reliance on prairie dogs for food, their habitats are closely related. They are found in the Great Plains spanning from Canada, through the USA and down to Mexico."
        text5="Diet:"
        text6="More than 90% of their diet are prairie dogs, they are also known to eat small rodents, and even small birds."
        text7="Fun Fact:"
        text8="They are nocturnal, meaning they are mostly active at night, they are also fossorial, which means they mostly live underground."
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


export default FerretPage