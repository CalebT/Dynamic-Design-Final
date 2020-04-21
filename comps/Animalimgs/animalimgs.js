import React from 'react';
import './animalimgs.css'

const Aniimg = require('../../Imgs/polarbear.jpg');

const Animalimg = ({img}) => <div className='animal_img'>
    <img src={img} />
</div>

Animalimg.defaultProps = {
    img: Aniimg
}

export default Animalimg;