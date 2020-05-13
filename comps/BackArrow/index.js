import React from 'react';
import './backArrow.css';

const backImg = require('./backArrow.svg')

const BackArrow = ({img, onClick}) => <div id="img_box">
    <img src={img} />
</div>;

BackArrow.defaultProps = {
    img:backImg,
    onClick:'',
}

export default BackArrow;