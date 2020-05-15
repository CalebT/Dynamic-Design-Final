import React from 'react'
import './loeafpage.css'
import Header from '../../comps/Header/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'
import Router from 'next/router';
import SidebarMenu from '../../comps/Menu/index'


function ClickVulnerable() {
    Router.push("/Afvpage")
}

function clickEndangered() {
    Router.push("/Afepage")
}

function clickCritical() {
    Router.push("/Afcpage")
}

function ClickBack() {
    Router.push("/Worldmappage")
}

const Loeafpage = () =>

    <div className='entire_loeaf'>
        <SidebarMenu/>
        <div className='loeaf_header'>
            <Header color='#0d6d0d' text='Africa' />
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


export default Loeafpage;
