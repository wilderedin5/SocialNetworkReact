import React from "react";
import { Carousel as BaseCarousel } from "antd";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Carousel = styled(BaseCarousel)`
  margin: 20px 0;
`;

const Img = styled.img`
  width: 100%;
  height: 150px;
`

export const Advertising = ({ advertising }) => (
  <Carousel autoplay={true}>
    {advertising.map(({ image, id }) => (
      <NavLink to={`/adverts/${id}`}>
        <Img src={image} alt="" />
      </NavLink>
    ))}
  </Carousel>
);
