import React from "react";
import styled from "@emotion/styled";
import { Divider } from "../common/type";
import { Mark } from "./mark";

const Container = styled.div`
  padding: 0 20px;
  color: #fff;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const Marks = ({ marks, setMark }) => (
  <Container>
    <Divider title="Marks" />
    {marks.length
      ? marks.map(({ theme, id, text }) => (
          <Mark
            key={id}
            onRemove={() => setMark(id, false)}
            theme={theme}
            text={text}
            id={id}
          />
        ))
      : "It is empty for now, news saved in mark will fall here!"}
  </Container>
);
