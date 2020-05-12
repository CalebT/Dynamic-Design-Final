import React from 'react'
import './worldmap.css'
import SmallButton from '../../comps/small-buttons/index'
import Americaimg from '../../comps/mapAmerica/index'
import Gray1img from '../../comps/mapGray1/index'
import Africaimg from '../../comps/mapAfrica/index'
import Router from 'next/router';
import Asiaimg from '../../comps/mapAsia'
import Gray2img from '../../comps/mapGray2'
import Australiaimg from '../../comps/mapAustralia'
import Header from '../../comps/Header/index'

function ClickAmerica() {
   Router.push("/Loeampage")
}

function ClickAsia() {
   Router.push("/Loeaspage")
}

function ClickAfrica() {
   Router.push("/Loeafpage")
}

function ClickAustralia() {
   Router.push("/Loeaupage")
}

function ClickBack() {
   Router.push("/Homepage")
}

const Worldmap = () => 

<div className='map_entire'>
   <div className="map">
      <Header color='#ffffff' text='Click an area to begin exploring!' fontSize='30px'/>
      <Americaimg onClick={ClickAmerica}/>
      <Gray1img />
      <Africaimg onClick={ClickAfrica} />
      <Asiaimg onClick={ClickAsia} />
      <Gray2img/>
      <Australiaimg onClick={ClickAustralia} />
   </div>
   <div className='button'>
      <SmallButton text='Back'
      onClick={ClickBack}/>
   </div>
</div>


export default Worldmap