import React from 'react'
import './loeaspage.css'
import Header from '../../comps/Header/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'

const Loeaspage = () =>

    <div className='entire_loeaf'>
        <div className='loeas_header'>
            <Header color='#0d6d0d' text='Asias' />
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


export default Loeaspage;
