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
    Router.push("/ElephantQuizPage1")
}

function ClickBack() {
    Router.push("/Afvpage")
}

var togglestate = 1;

function ClickToggle() {
    if (togglestate ===  0) {
        document.querySelector(".pic2").style.display = "block";
        document.querySelector(".pic1").style.display = "none";
        togglestate = 1;
    } else if (togglestate === 1) {
        document.querySelector(".pic1").style.display = "block";
        document.querySelector(".pic2").style.display = "none";
        togglestate = 0;
    }
}

const img1 = require('../../Imgs/elephant1.jpg');
const img2 = require('../../Imgs/elephant2.jpg')

const ElephantPage = () => 

<div className='entire_animalinfo'>
    <div className='animal_header'>
        <Header color='#0d6d0d' text='African Forest Elephant' fontSize='22pt'/>
    </div>
    <div className='animal_img_box'>
        <div onClick={ClickToggle}>
        <BackArrow />
        </div>

        <div className="pic2">
        <Animalimg
        img={img1}
        />
        </div>
        <div className="pic1">
        <Animalimg
        img={img2}
        />
        </div>

        <div onClick={ClickToggle}>
            <NextArrow />
        </div>    
    </div>
    <div className='animal_sound'>
        <p id='sound'>Sound: </p>
        <SoundButton />
    </div>
    <div className='info'>
        <AnimalInfo 
        text1="Population in Wild:"
        text2="less than 200,000"
        text3="Location/Habitat:"
        text4="Lowland tropical and subtropical rainforests and woodlands of Central Western Africa."
        text5="Diet:"
        text6="Herbs, trees or shrubbery leaves and lots of water."
        text7="Fun Fact:"
        text8="A female elephant's pregnancy lasts about 22 months, that’s almost 2 years! The longest pregnancy of any mammal."
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


export default ElephantPage