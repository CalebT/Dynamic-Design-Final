import React from 'react';

const Asia = require('../../Imgs/Asia.svg');

const Asiaimg = ({img, onClick}) => 
<div className='asia_map'>
    <img className ='asia'src={img} onClick={onClick}/>
</div>

Asiaimg.defaultProps = {
    img: Asia,
    onClick:'',
}

export default Asiaimg;