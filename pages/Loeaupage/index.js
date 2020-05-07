import React from 'react'
import './loeaupage.css'
import Header from '../../comps/Header/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'
import Router from 'next/router'

function ClickVulnerable() {
    Router.push("/Auvpage")
}

function clickEndangered() {
    Router.push("/Auepage")
}

function clickCritical() {
    Router.push("/Aucpage")
}

function ClickBack() {
    Router.push("/Worldmappage")
}

const Loeaupage = () =>

    <div className='entire_loeau'>
        <div className='loeau_header'>
            <Header color='#0d6d0d' text='Australia' />
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


export default Loeaupage;
