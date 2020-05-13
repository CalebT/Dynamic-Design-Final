import {useState} from 'react';
import React from 'react';
import './menu.css';
import MenuButton from '../menu-buttons';
import {TiThMenu} from 'react-icons/ti';

function ClickHome() {
    Router.push("/Homepage")
 }
 function ClickTut() {
    Router.push("/Tutorialpage")
 }
 function ClickMap() {
    Router.push("/Worldmappage")
 }

const SidebarMenu = () => 

<div className='entire_menu'>
    <div className='menu_buttons' >
        <div className='but'>
            <MenuButton text='Home' onClick={ClickHome}/>
            <MenuButton text='Tutorial' onClick={ClickTut}/>
            <MenuButton text='World Map' onClick={ClickMap}/>
        </div>
    </div>
    <div className='menu_icon'>
        <TiThMenu size={40} onClick={()=>{
            MenuToggle()
        }} />
    </div>
</div>

export default SidebarMenu

var menu_state = false;

function MenuToggle(){
    if(menu_state === false){
        OpenMenu();
    } else{
        CloseMenu();
    }
}

function OpenMenu(){
    document.querySelector('.menu_buttons').style.left = '0'
    document.querySelector('.menu_icon').style.left = '65%'
    menu_state = true;
}
function CloseMenu(){
    document.querySelector('.menu_buttons').style.left = '-100%'
    document.querySelector('.menu_icon').style.left = '0'
    menu_state = false;
}