import React from 'react'
import './loeampage.css'
import Header from '../../comps/Header/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'
import Router from 'next/router';

function ClickVulnerable() {
    Router.push("/Amvpage")
}

function clickEndangered() {
    Router.push("/Amepage")
}

function clickCritical() {
    Router.push("/Amcpage")
}

function ClickBack() {
    Router.push("/Worldmappage")
}

const Loeampage = () =>

    <div className='entire_loeam'
    >
        <div className='loeam_header'>
            <Header color='#0d6d0d' text='Americas' />
        </div>
        <div className='buttons_big'>
            <BigButton text='Vulnerable'
            onClick={ClickVulnerable}
            />
            <BigButton text='Endangered' 
            onClick={clickEndangered}
            />
            <BigButton text='Critically Endangered' 
            onClick={clickCritical}
            />  
        </div>
        <div className='buttons_small'>
            <SmallButton text='Back' 
            onClick={ClickBack}
            />
        </div>
    </div>

export default Loeampage;
