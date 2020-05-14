import React from 'react'
import './aucpage.css'
import Header from '../../comps/Header/index'
import Subheader from '../../comps/Subheader/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'
import Router from 'next/router';
import SidebarMenu from '../../comps/Menu/index'


function ClickPredator() {
    Router.push("/FrigatebirdPage")
}

function ClickPrey() {
    Router.push("/CurlewPage")
}

function ClickBack() {
    Router.push("/Loeaupage")
}


const Aucpage = () =>

    <div className='entire_auc'>
        <SidebarMenu/>
        <div className='auc_header'>
            <Header color='#0d6d0d' text='Australia' />
        </div>
        <div className='auc_subheader'>
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
            onClick={ClickBack}/>
        </div>
    </div>


export default Aucpage;
