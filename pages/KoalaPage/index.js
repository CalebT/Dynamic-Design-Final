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
    Router.push("/koalaQuizPage1")
}

function ClickBack() {
    Router.push("/Auvpage")
}

const KoalaPage = () => 

<div className='entire_animalinfo'>
    <div className='animal_header'>
        <Header color='#0d6d0d' text='Koala' fontSize='25pt'/>
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
        text2="Due to the recent fires in Australia in the beginning of 2020, the population of koalas is currently unknown. It is estimated that there are less than 100,000 left in the wild, and it could be as low as 43,000."
        text3="Location/Habitat:"
        text4="Koalas can only live in forests where eucalyptus trees grow in Australia."
        text5="Diet:"
        text6="Koalas eat primarily eucalyptus leaves."
        text7="Fun Fact:"
        text8="Although called Koala bears, they are not actually bears at all, koalas are marsupials!"
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


export default KoalaPage