import React from 'react'
import './afvpage.css'
import Header from '../../comps/Header/index'
import Subheader from '../../comps/Subheader/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'
import Router from 'next/router';
import SidebarMenu from '../../comps/Menu/index'


function ClickPredator() {
    Router.push("/LionPage")
}

function ClickPrey() {
    Router.push("/ElephantPage")
}

function ClickBack() {
    Router.push("/Loeafpage")
}

const Afvpage = () =>

    <div className='entire_afv'>
        <SidebarMenu/>
        <div className='afv_header'>
            <Header color='#0d6d0d' text='Africa' />
        </div>
        <div className='afv_subheader'>
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
            onClick={ClickBack}
            />
        </div>
    </div>


export default Afvpage;
