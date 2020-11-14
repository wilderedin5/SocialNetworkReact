import React from "react";
import styled from "@emotion/styled";

const Image = styled.img`
  width: 100%;
  height: 350px;
`;

const Title = styled.h2`
  font-size: 32px;
  margin: 0;
`;

const Container = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 10px;
`;

export const Content = ({ image, title, text }) => (
  <Container>
    <Image src={image} />
    <Title>{title}</Title>
    <div>{text}</div>
  </Container>
);
