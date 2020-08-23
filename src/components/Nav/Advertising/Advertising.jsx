import React from "react";
import { Carousel as BaseCarousel } from "antd";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Carousel = styled(BaseCarousel)`
  margin: 20px 0;
`;

const Slide = styled.div`
  & img {
    width: 100%;
    height: 150px;
  }
`;

const Advertising = ({ advertising }) => (
  <Carousel autoplay={true}>
    {advertising.map((advert) => (
      <NavLink to={`/adverts/${advert.id}`}>
        <Slide>
          <img src={advert.image} alt="" />
        </Slide>
      </NavLink>
    ))}
  </Carousel>
);

export default Advertising;
