import React from 'react'
import './auepage.css'
import Header from '../../comps/Header/index'
import Subheader from '../../comps/Subheader/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'
import Router from 'next/router'
import SidebarMenu from '../../comps/Menu/index'


function ClickPredator() {
    Router.push("/DevilPage")
}

function ClickPrey() {
    Router.push("/WallabyPage")
}

function ClickBack() {
    Router.push("/Loeaupage")
}


const Auepage = () =>

    <div className='entire_aue'>
        <SidebarMenu/>
        <div className='aue_header'>
            <Header color='#0d6d0d' text='Australia' />
        </div>
        <div className='aue_subheader'>
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
            onClick={ClickBack}/>
        </div>
    </div>


export default Auepage;
