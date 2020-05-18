import React from 'react';
import OneAdvert from './OneAdvert/OneAdvert';

const Adverts = (props) => {
    const advertId = +props.match.params.advertId;

    return ( props.advertising.filter(advert => advert.id === advertId).map( advert => <OneAdvert toggleLikeCommentFromAdvert={props.toggleLikeCommentFromAdvert} deleteCommentFromAdvert={props.deleteCommentFromAdvert} {...advert} />))
}

export default Adverts;