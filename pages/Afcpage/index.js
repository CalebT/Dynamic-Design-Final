import React from 'react'
import './afcpage.css'
import Header from '../../comps/Header/index'
import Subheader from '../../comps/Subheader/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'
import Router from 'next/router';
import SidebarMenu from '../../comps/Menu/index'


function ClickPredator() {
    Router.push("/WolfPage")
}

function ClickPrey() {
    Router.push("/RhinoPage")
}

function ClickBack() {
    Router.push("/Loeafpage")
}

const Afcpage = () =>

    <div className='entire_afc'>
        <SidebarMenu/>
        <div className='afc_header'>
            <Header color='#0d6d0d' text='Africa' />
        </div>
        <div className='afc_subheader'>
            <Subheader color='#ef9b20' text='Critically Endangered' />
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


export default Afcpage;
