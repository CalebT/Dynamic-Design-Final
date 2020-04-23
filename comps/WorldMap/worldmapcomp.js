import React from 'react';
import './worldmapcomp.css'

const America = require('../../Imgs/Americas.svg');

const Americaimg = ({img}) => <div className='worldmap_img'>
    <img src={img} />
</div>

Americaimg.defaultProps = {
    img: America
}

export default Americaimg;