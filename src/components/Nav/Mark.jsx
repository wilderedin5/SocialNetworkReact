import React from "react";
import styled from "@emotion/styled";
import { Card as BaseCard } from "antd";
import { NavLink } from "react-router-dom";
import { Button } from "../common/type";

const Delete = styled.div`
  cursor: pointer;
  :hover {
    color: red;
  }
`;

const Card = styled(BaseCard)`
  margin-bottom: 5px;
  font-size: 10px;
  text-align: justify;
`;

export const Mark = ({ theme, onRemove, id, text }) => (
  <Card
    size="small"
    title={theme}
    extra={<Delete onClick={onRemove}>&#9932;</Delete>}
  >
    {text.substring(0, 100)}.....
    <NavLink to={`/news/${id}`}>
      <Button>Open news</Button>
    </NavLink>
  </Card>
);
