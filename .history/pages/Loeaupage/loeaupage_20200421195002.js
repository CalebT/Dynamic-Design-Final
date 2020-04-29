import React from 'react'
import './loeaupage.css'
import Header from '../../comps/Header/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'

const Loeaupage = () =>

    <div className='entire_loeau'>
        <div className='loeau_header'>
            <Header color='#0d6d0d' text='Australias' />
        </div>
        <div className='buttons_big'>
            <BigButton text='Vulnerable' />
            <BigButton text='Endangered' />
            <BigButton text='Critically Endangered' />  
        </div>
        <div className='buttons_small'>
            <SmallButton text='Back' />
        </div>
    </div>


export default Loeaupage;
