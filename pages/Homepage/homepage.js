import React from 'react'
import './homepage.css'
import AnipalsLogo from '../../comps/Logo/logo'
import BigButton from '../../comps/big-buttons/index'

const Homepage = () => 

<div className='entire_home'>
    <div className='logo'>
        <AnipalsLogo />
    </div>
    <div className='buttons'>
        <BigButton text='Start'/>
        <BigButton text='Tutorial'/>
    </div>
</div>


export default Homepage