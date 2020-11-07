import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;

export const Footer = ({ copyright }) => <Container>{copyright}</Container>;
