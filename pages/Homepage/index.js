import React from 'react'
import './homepage.css'
import AnipalsLogo from '../../comps/Logo/logo'
import BigButton from '../../comps/big-buttons'
import Router from 'next/router';
import SidebarMenu from '../../comps/Menu';
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
        <Header text="L" color="#F4F729"/>
        <Header text="C" color="#51F325"/>
        <Header text="O" color="#25F3F3"/>
        <Header text="M" color="#2579F3"/>
        <Header text="E" color="#7925F3"/>
    </div>
    <div className='buttons'>
        <BigButton text='Let&apos;s Start!'
        onClick={ClickStart}/>
        <BigButton text='Tutorial'
        onClick={ClickTutorial}/>
    </div>
</div>


export default Homepage