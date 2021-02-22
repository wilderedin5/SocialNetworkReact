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
  padding: 10px;
  border: 1px solid #000;
  border-radius: 10px;
`;

export const Content = ({ img, title, text, className }) => (
  <Container className={className}>
    <Image src={img} />
    <Title>{title}</Title>
    {text}
  </Container>
);
