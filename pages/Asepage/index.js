import React from 'react'
import './asepage.css'
import Header from '../../comps/Header/index'
import Subheader from '../../comps/Subheader/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'
import Router from 'next/router';

function ClickPredator() {
    Router.push("/DolphinPage")
}

function ClickPrey() {
    Router.push("/GibbonPage")
}

function ClickBack() {
    Router.push("/Loeampage")
}

const Asepage = () =>

    <div className='entire_ase'>
        <div className='ase_header'>
            <Header color='#0d6d0d' text='Asia' />
        </div>
        <div className='ase_subheader'>
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


export default Asepage;
