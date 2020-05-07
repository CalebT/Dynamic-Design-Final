import React from 'react';
import './loeaspage.css';
import Header from '../../comps/Header/index';
import BigButton from '../../comps/big-buttons/index';
import SmallButton from '../../comps/small-buttons/index';
import Americaimg from '../../comps/WorldMap/worldmapcomp';
import Router from 'next/router';

function ClickVulnerable() {
    Router.push("/Asvpage")
}

function clickEndangered() {
    Router.push("/Asepage")
}

function clickCritical() {
    Router.push("/Ascpage")
}

function ClickBack() {
    Router.push("/Worldmappage")
}

const Loeaspage = () =>

    <div className='entire_loeas'>
        <div className='loeas_header'>
            <Header color='#0d6d0d' text='Asia' />
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


export default Loeaspage;
