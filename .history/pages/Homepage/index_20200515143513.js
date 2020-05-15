import React from 'react'
import './homepage.css'
import AnipalsLogo from '../../comps/Logo/logo'
import BigButton from '../../comps/big-buttons/index'
import Router from 'next/router';
import SidebarMenu from '../../comps/Menu/index';
import Header from '../../comps/Header'


function ClickStart() {
    Router.push("/Worldmappage")
}

function ClickTutorial() {
    Router.push("/Tutorialpage")
}

const Homepage = () => 
<div className='entire_home'>
<SidebarMenu/>
    <div className='logo'>
        <AnipalsLogo />
    </div>
    <div className='welcomeheader'>
        <Header text="W" color="#FF5733"/>
        <Header text="E" color="#FF9933"/>
        <Header text="E" color="#F4F729"/>
        
    </div>
    <div className='buttons'>
        <BigButton text='Let&apos;s Start!'
        onClick={ClickStart}/>
        <BigButton text='Tutorial'
        onClick={ClickTutorial}/>
    </div>
</div>


export default Homepage