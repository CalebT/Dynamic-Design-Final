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
import SidebarMenu from '../../comps/Menu/index'


function ClickQuiz() {
    Router.push("/MarmotQuizPage1")
}

function ClickBack() {
    Router.push("/Amcpage")
}

const MarmotPage = () => 

<div className='entire_animalinfo'>
<SidebarMenu/>
    <div className='animal_header'>
        <Header color='#0d6d0d' text='Vancouver Island Marmot' fontSize='25pt'/>
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
        text2="200 in 2019, up from 30 in 2004"
        text3="Location/Habitat:"
        text4="Small patches of south and west-facing alpine meadows on mountains on Vancouver Island."
        text5="Diet:"
        text6="They are herbivores and eat over 40 species of grasses, herbs, and wildflowers."
        text7="Fun Fact:"
        text8="They spend about seven months of the year underground."
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


export default MarmotPage