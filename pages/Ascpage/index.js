import React from 'react'
import './ascpage.css'
import Header from '../../comps/Header/index'
import Subheader from '../../comps/Subheader/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'
import Router from 'next/router';

function ClickPredator() {
    Router.push("/TigerPage")
}

function ClickPrey() {
    Router.push("/PangolinPage")
}

function ClickBack() {
    Router.push("/Loeaspage")
}

const Ascpage = () =>

    <div className='entire_asc'>
        <div className='asc_header'>
            <Header color='#0d6d0d' text='Asia' />
        </div>
        <div className='asc_subheader'>
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


export default Ascpage;
