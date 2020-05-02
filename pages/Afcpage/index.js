import React from 'react'
import './afcpage.css'
import Header from '../../comps/Header/index'
import Subheader from '../../comps/Subheader/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'

const Afcpage = () =>

    <div className='entire_afc'>
        <div className='afc_header'>
            <Header color='#0d6d0d' text='Africa' />
        </div>
        <div className='afc_subheader'>
            <Subheader color='#ef9b20' text='Critically Endangered' />
        </div>
        <div className='buttons_big'>
            <BigButton text='Prey' />
            <BigButton text='Predator' />
        </div>
        <div className='buttons_small'>
            <SmallButton text='Back' />
        </div>
    </div>


export default Afcpage;
