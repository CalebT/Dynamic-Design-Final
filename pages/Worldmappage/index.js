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

<div className='entire_map'
onClick={ClickAmerica}>
   <div className='map'>
      <Americaimg 
      />
   </div>
   
   <div className='button'>
      <SmallButton text='Back'
      onClick={ClickBack}/>
   </div>
</div>


export default Worldmap