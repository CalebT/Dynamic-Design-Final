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

const DingoPage = () => 

<div className='entire_animalinfo'>
    <div className='animal_header'>
        <Header color='#0d6d0d' text='Dingo' fontSize='25pt'/>
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
        text2="Dingoes are numerous due to interbreeding with domestic dogs, however this is causing the pure population of dingoes to decrease. The number of pure dingoes is unknown."
        text3="Location/Habitat:"
        text4="Dingoes live throughout western and central Australia in plains, forests, deserts, and mountainous rural areas."
        text5="Diet:"
        text6="Dingoes primarily eat meat such as small to medium sized rodents, lizards or birds, but also eat fruits, grains, and nuts at times."
        text7="Fun Fact:"
        text8="Dingoes have a great sense of vision and can swivel their heads 180 degrees!"
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


export default DingoPage