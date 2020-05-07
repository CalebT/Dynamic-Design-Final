import React from 'react'
import './afepage.css'
import Header from '../../comps/Header/index'
import Subheader from '../../comps/Subheader/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'
import Router from 'next/router';

function ClickPredator() {
    Router.push("/WildDogPage")
}

function ClickPrey() {
    Router.push("/BonoboPage")
}

function ClickBack() {
    Router.push("/Loeafpage")
}

const Afepage = () =>

    <div className='entire_afe'>
        <div className='afe_header'>
            <Header color='#0d6d0d' text='Africa' />
        </div>
        <div className='afe_subheader'>
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


export default Afepage;
