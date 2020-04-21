import React from 'react'
import './menu.css'
import BigButton from '../big-buttons'
import {TiThMenu} from 'react-icons/ti'

var menu_state = false;

function MenuToggle(){
    if(menu_state === false){
        OpenMenu();
    } else{
        CloseMenu();
    }
}

function OpenMenu(){
    document.querySelector('.menu_buttons').style.left = '0px'
    document.querySelector('.menu_icon').style.left = '0px;'
    menu_state = true;
}
function CloseMenu(){
    document.querySelector('.menu_buttons').style.left = '-100%'
    document.querySelector('.menu_icon').style.left = '-250px'
    menu_state = false;
}


const SidebarMenu = () => 

<div className='entire_menu'>
    <div className='menu_buttons'>
        <BigButton text='Home'/>
        <BigButton text='Tutorial'/>
        <BigButton text='World Map'/>
    </div>

    <div className='menu_icon'>
        <TiThMenu onClick={MenuToggle} size={40}/>
    </div>
</div>


export default SidebarMenu