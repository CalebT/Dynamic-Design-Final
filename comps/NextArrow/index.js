import React from 'react';

const nextImg = require('./nextArrow.svg')

const NextArrow = ({img}) => <div id="img_box">
    <img src={img} />
</div>;

NextArrow.defaultProps = {
    img:nextImg,
}

export default NextArrow;