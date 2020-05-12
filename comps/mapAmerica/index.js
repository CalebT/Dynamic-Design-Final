import React from 'react';

const America = require('../../Imgs/Americas.svg');

const Americaimg = ({img, onClick}) => 
<div className='america_map'>
    <img className ='america'src={img} onClick={onClick}/>
</div>

Americaimg.defaultProps = {
    img: America,
    onClick:'',
}

export default Americaimg;