import React from 'react'
import './asvpage.css'
import Header from '../../comps/Header/index'
import Subheader from '../../comps/Subheader/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'
import Router from 'next/router';

function ClickPredator() {
    Router.push("/FormosanPage")
}

function ClickPrey() {
    Router.push("/PandaPage")
}

function ClickBack() {
    Router.push("/Loeaspage")
}

const Asvpage = () =>

    <div className='entire_asv'>
        <div className='asv_header'>
            <Header color='#0d6d0d' text='Asia' />
        </div>
        <div className='asv_subheader'>
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


export default Asvpage;
