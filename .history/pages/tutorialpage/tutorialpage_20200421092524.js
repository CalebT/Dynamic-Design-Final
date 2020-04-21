import React from 'react'
import './tutorialpage.css'
import Header from '../../comps/Header/index'
import TutorialSteps from '../../comps/tutorial-steps'
import SmallButton from '../../comps/small-buttons/index'

const Tutorialpage = () =>

    <div className='entire_tutorial'>
        <div className='tutorial_header'>
            <Header color='#6de2de' text='Tutorial' />
        </div>
        <TutorialSteps />
        <div className='buttons'>
            <SmallButton text='Back' />
        </div>
    </div>


export default Tutorialpage;
