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
`;

export const Adverts = ({ adverts }) => (
  <Carousel autoplay={true}>
    {adverts.map(({ img, title, id }) => (
      <NavLink key={title} to={`/adverts/${id}`}>
        <Img src={img} alt="" />
      </NavLink>
    ))}
  </Carousel>
);
