import React from 'react'
import './loeampage.css'
import Header from '../../comps/Header/index'
import BigButton from '../../comps/big-buttons/index'
import SmallButton from '../../comps/small-buttons/index'

const Loeampage = () =>

    <div className='entire_loeam'>
        <div className='loeam_header'>
            <Header color='#0d6d0d' text='Americas' />
        </div>
        <div className='buttons_big'>
            <div idName='V'><BigButton text='Vulnerable' /></div>
            <div idName='E'><BigButton text='Endangered' /></div>
            <div idName='C'><BigButton text='Critically Endangered' /></div>
        </div>
        <div className='buttons_small'>
            <SmallButton text='Back' />
        </div>
    </div>


export default Loeampage;
