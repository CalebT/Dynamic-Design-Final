import React from 'react'
import './auvpage.css'
import Header from '../../comps/Header/index'
import Subheader from '../../comps/Subheader/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'
import Router from 'next/router'
import SidebarMenu from '../../comps/Menu/index'


function ClickPredator() {
    Router.push("/DingoPage")
}

function ClickPrey() {
    Router.push("/KoalaPage")
}

function ClickBack() {
    Router.push("/Loeaupage")
}


const Auvpage = () =>

    <div className='entire_aue'>
        <SidebarMenu/>
        <div className='auv_header'>
            <Header color='#275CE2' text='Australia' />
        </div>
        <div className='auv_subheader'>
            <Subheader color='#ef9b20' text='Vulnerable' />
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


export default Auvpage;
