import React from 'react';

const Africa = require('../../Imgs/Africa.svg');

const Africaimg = ({img, onClick}) => 
<div className='africa_map'>
    <img className ='africa'src={img} onClick={onClick}/>
</div>

Africaimg.defaultProps = {
    img: Africa,
    onClick:'',
}

export default Africaimg;