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

const WolfPage = () => 

<div className='entire_animalinfo'>
    <div className='animal_header'>
        <Header color='#0d6d0d' text='Ethiopian Wolf' fontSize='25pt'/>
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
        text2="fewer than 440"
        text3="Location/Habitat:"
        text4="Ethiopian wolves are only found in the mountains of Ethiopia."
        text5="Diet:"
        text6="Mainly eat rodents plentiful within their range, such as hares, grass rats and giant mole rats, they also eat gosling and eggs."
        text7="Fun Fact:"
        text8="The Ethiopian wolf is the only wolf that lives in Africa."
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


export default WolfPage