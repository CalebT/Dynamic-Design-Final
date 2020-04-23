import React from 'react'
import './afvpage.css'
import Header from '../../comps/Header/index'
import Subheader from '../../comps/Subheader/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'

const Afvpage = () =>

    <div className='entire_afv'>
        <div className='afv_header'>
            <Header color='#0d6d0d' text='Afericas' />
        </div>
        <div className='afv_subheader'>
            <Subheader color='#ef9b20' text='Vulnerable' />
        </div>
        <div className='buttons_big'>
            <BigButton text='Prey' />
            <BigButton text='Predator' />
        </div>
        <div className='buttons_small'>
            <SmallButton text='Back' />
        </div>
    </div>


export default Afvpage;
