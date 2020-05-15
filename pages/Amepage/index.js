import React from 'react'
import './amepage.css'
import Header from '../../comps/Header/index'
import Subheader from '../../comps/Subheader/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'
import Router from 'next/router';
import SidebarMenu from '../../comps/Menu/index'


function ClickPredator() {
    Router.push("/FerretPage")
}

function ClickPrey() {
    Router.push("/CranePage")
}

function ClickBack() {
    Router.push("/Loeampage")
}

const Amepage = () =>

    <div className='entire_ame'>
        <SidebarMenu/>
        <div className='ame_header'>
            <Header color='#0d6d0d' text='Americas' />
        </div>
        <div className='amv_subheader'>
            <Subheader color='#ef9b20' text='Endangered' />
        </div>
        <div className='buttons_big'>
            <BigButton text='Prey' 
            onClick={ClickPrey}
            />
            <BigButton text='Predator' 
            onClick={ClickPredator}
            />
        </div>
        <div className='buttons_small'>
            <SmallButton text='Back' 
            onClick={ClickBack}
            />
        </div>
    </div>


export default Amepage;
