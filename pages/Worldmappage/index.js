import React from 'react'
import './worldmap.css'
import SmallButton from '../../comps/small-buttons/index'
import Americaimg from '../../comps/WorldMap/worldmapcomp'
import Router from 'next/router';

function ClickAmerica() {
   Router.push("/Loeampage")
}

function ClickBack() {
   Router.push("/Homepage")
}

const Worldmap = () => 

<div className='entire_map'>
   <div className='map'>
      <Americaimg 
      onClick={ClickAmerica}/>
   </div>
   
   <div className='button'>
      <SmallButton text='Back'
      onClick={ClickBack}/>
   </div>
</div>


export default Worldmap