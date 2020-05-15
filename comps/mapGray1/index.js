import React from 'react';

const Gray1 = require('../../Imgs/gray1.svg');

const Gray1img = ({img, onClick}) => 
<div className='gray1_map'>
    <img className ='gray1'src={img} onClick={onClick}/>
</div>

Gray1img.defaultProps = {
    img: Gray1,
    onClick:'',
}

export default Gray1img;