import React from 'react';

const AniLogo = require('../../Imgs/wordmark.svg');

const AnipalsLogo = ({img}) => <div>
    <img className='anipalslogo' src={img} />
</div>

AnipalsLogo.defaultProps = {
    img: AniLogo
}

export default AnipalsLogo;