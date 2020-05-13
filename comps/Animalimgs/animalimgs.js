import React from 'react';
import './animalimgs.css';

const Animalimg = ({img}) => <div className='animal_img'>
    <img className='imgs' src={img} />
</div>

Animalimg.defaultProps = {
    img:"",
}

export default Animalimg;