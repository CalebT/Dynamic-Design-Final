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
    Router.push("/RhinoQuizPage1")
}

function ClickBack() {
    Router.push("/Afcpage")
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

const img1 = require('../../Imgs/rhino1.jpg');
const img2 = require('../../Imgs/rhino2.jpg')

const RhinoPage = () => 

<div className='entire_animalinfo'>
<SidebarMenu/>
    <div className='animal_header'>
        <Header color='#0d6d0d' text='Black Rhino' fontSize='25pt'/>
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
        text2="approximately 5,500"
        text3="Location/Habitat:"
        text4="They live in grasslands throughout Africa."
        text5="Diet:"
        text6="fruits and leaves from trees and bushes."
        text7="Fun Fact:"
        text8="Black Rhinos can run at up to 40 miles per hour (64 kilometers per hour) making it one of the fastest large animals on earth!"
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


export default RhinoPage