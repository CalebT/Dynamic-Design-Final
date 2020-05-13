import React from 'react';
import './animalimgs.css';

const PolarBear1 = require('../../Imgs/polarbear1.jpg');
const PolarBear2 = require('../../Imgs/polarbear2.jpg')

const Animalimg = ({img}) => <div className='animal_img'>
    <img className='imgs' src={img} />
</div>

Animalimg.defaultProps = {
    img:"",
}

export default Animalimg;