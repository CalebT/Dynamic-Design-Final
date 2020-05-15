import React from 'react';

const Australia = require('../../Imgs/Australia.svg');

const Australiaimg = ({img, onClick}) => 
<div className='australia_map'>
    <img className ='australia'src={img} onClick={onClick}/>
</div>

Australiaimg.defaultProps = {
    img: Australia,
    onClick:'',
}

export default Australiaimg;