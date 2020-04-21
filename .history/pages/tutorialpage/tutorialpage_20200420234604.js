import React from 'react'
import './tutorial.css'
import TutorialSteps from '../../comps/tutorial-steps'
import SmallButton from '../../comps/small-buttons/index'

const Tutorialpage = () => 

<div className='entire_tutorial'>
        <TutorialSteps />
    <div className='buttons'>
        <SmallButton text='Back'/>
    </div>
</div>


export default Tutorialpage;