import React from 'react'
import './worldmap.css'
import SmallButton from '../../comps/small-buttons/index'
import Americaimg from '../../comps/WorldMap/worldmapcomp'

const Worldmap = () => 

<div className='entire_map'>
   <div className='map'>
      <Americaimg />
   </div>
   
   <div className='button'>
    <SmallButton text='Back'/>
   </div>
</div>


export default Worldmap