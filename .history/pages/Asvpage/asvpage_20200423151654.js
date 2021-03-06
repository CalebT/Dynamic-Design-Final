import React from 'react'
import './asvpage.css'
import Header from '../../comps/Header/index'
import Subheader from '../../comps/Subheader/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'

const Asvpage = () =>

    <div className='entire_asv'>
        <div className='afv_header'>
            <Header color='#0d6d0d' text='Asias' />
        </div>
        <div className='asv_subheader'>
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


export default Asvpage;
