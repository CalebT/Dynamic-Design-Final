import React from 'react';

const AniLogo = require('../../Imgs/wordmark.svg');

const AnipalsLogo = ({img}) => <div>
    <img src={img} />
</div>

AnipalsLogo.defaultProps = {
    img: AniLogo
}

export default AnipalsLogo;