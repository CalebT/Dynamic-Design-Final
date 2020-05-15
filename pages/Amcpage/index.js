import React from 'react'
import './amcpage.css'
import Header from '../../comps/Header/index'
import Subheader from '../../comps/Subheader/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'
import Router from 'next/router';
import SidebarMenu from '../../comps/Menu/index'


function ClickPredator() {
    Router.push("/VaquitaPage")
}

function ClickPrey() {
    Router.push("/MarmotPage")
}

function ClickBack() {
    Router.push("/Loeampage")
}

const Amcpage = () =>

    <div className='entire_amc'>
        <SidebarMenu/>
        <div className='amc_header'>
            <Header color='#0d6d0d' text='Americas' />
        </div>
        <div className='amc_subheader'>
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


export default Amcpage;
