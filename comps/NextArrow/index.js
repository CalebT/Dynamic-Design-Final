import React from 'react';
import './nextArrow.css';

const nextImg = require('./nextArrow.svg')

const NextArrow = ({img, onClick}) => <div id="img_box">
    <img src={img} />
</div>;

NextArrow.defaultProps = {
    img:nextImg,
    onClick:"",
}

export default NextArrow;