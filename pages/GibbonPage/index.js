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

const GibbonPage = () => 

<div className='entire_animalinfo'>
    <div className='animal_header'>
        <Header color='#0d6d0d' text='Lar Gibbon' fontSize='25pt'/>
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
        text2="There is currently no total population estimate."
        text3="Location/Habitat:"
        text4="Tropical rainforests of Southeast Asia, including Indonesia, Malaysia, Thai-land, and Laos."
        text5="Diet:"
        text6="they primarily feed on fruit, leafy plants, flowers, and insects."
        text7="Fun Fact:"
        text8="Lar Gibbons are arboreal animals, meaning they spend most of their lives up in the trees."
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


export default GibbonPage