import React from "react";
import styled from "@emotion/styled";
import { Card as BaseCard } from "antd";
import { NavLink } from "react-router-dom";
import { Button } from "../common/type";

const Close = styled.div`
  cursor: pointer;

  :hover {
    color: red;
  }
`;

const Card = styled(BaseCard)`
  display: flex;
  flex-flow: column;
  font-size: 10px;
  text-align: justify;

  & + & {
    margin-top: 5px;
  }
`;

export const Mark = ({ theme, onRemove, id, text }) => (
  <Card
    size="small"
    title={theme}
    extra={<Close onClick={onRemove}>&#9932;</Close>}
  >
    {text.substring(0, 100)}
    <NavLink to={`/news/${id}`}>
      <Button>Open news</Button>
    </NavLink>
  </Card>
);
