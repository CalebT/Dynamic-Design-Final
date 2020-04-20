import React from 'react';

const backImg = require('./backArrow.svg')

const BackArrow = ({img}) => <div id="img_box">
    <img src={img} />
</div>;

BackArrow.defaultProps = {
    img:backImg,
}

export default BackArrow;