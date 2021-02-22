import React from "react";
import styled from "@emotion/styled";
import { Button } from "../common/type";
import { Note } from "../common/type";

const Container = styled.div`
  border: 1px solid #2d50a5;
  padding: 10px 5px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Advert = ({ title, text, deleteAdvert }) => (
  <Container>
    <Note label="Title" value={title} />
    <Note label="Text advert" value={text} />
    <Button onClick={deleteAdvert}>Remove advert</Button>
  </Container>
);
