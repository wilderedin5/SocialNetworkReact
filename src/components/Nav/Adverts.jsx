import React from "react";
import { Carousel } from "antd";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Img = styled.img`
  width: 100%;
  height: 150px;
`;

export const Adverts = ({ adverts, className }) => (
  <Carousel autoplay={true} className={className}>
    {adverts.map(({ img, id }) => (
      <NavLink to={`/adverts/${id}`} key={id}>
        <Img src={img} />
      </NavLink>
    ))}
  </Carousel>
);
