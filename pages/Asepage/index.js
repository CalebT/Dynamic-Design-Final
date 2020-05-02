import React from 'react'
import './asepage.css'
import Header from '../../comps/Header/index'
import Subheader from '../../comps/Subheader/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'

const Asepage = () =>

    <div className='entire_ase'>
        <div className='ase_header'>
            <Header color='#0d6d0d' text='Asia' />
        </div>
        <div className='ase_subheader'>
            <Subheader color='#ef9b20' text='Endangered' />
        </div>
        <div className='buttons_big'>
            <BigButton text='Prey' />
            <BigButton text='Predator' />
        </div>
        <div className='buttons_small'>
            <SmallButton text='Back' />
        </div>
    </div>


export default Asepage;
