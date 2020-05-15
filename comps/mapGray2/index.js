import React from 'react';

const Gray2 = require('../../Imgs/gray2.svg');

const Gray2img = ({img, onClick}) => 
<div className='gray2_map'>
    <img className ='gray2'src={img} onClick={onClick}/>
</div>

Gray2img.defaultProps = {
    img: Gray2,
    onClick:'',
}

export default Gray2img;