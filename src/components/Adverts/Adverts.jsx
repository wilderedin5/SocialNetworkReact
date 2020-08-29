import React from "react";
import Advert from "./Advert/Advert";

const Adverts = (props) => {
  const advertId = +props.match.params.advertId;

  return props.advertising
    .filter((advert) => advert.id === advertId)
    .map((advert) => <Advert {...props} {...advert} />);
};

export default Adverts;
