import React from 'react';
import './nextArrow.css';

const nextImg = require('./nextArrow.svg')

const NextArrow = ({img}) => <div id="img_box">
    <img src={img} />
</div>;

NextArrow.defaultProps = {
    img:nextImg,
}

export default NextArrow;