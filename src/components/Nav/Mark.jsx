import React from "react";
import styled from "@emotion/styled";
import { Card as BaseCard } from "antd";
import { NavLink } from "react-router-dom";

const Close = styled.div`
  cursor: pointer;

  :hover {
    color: red;
  }
`;

const Card = styled(BaseCard)`
  & + & {
    margin-top: 5px;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
`;

export const Mark = ({ theme, onRemove, id, text }) => (
  <Card
    size="small"
    title={theme}
    extra={<Close onClick={onRemove}>&#9932;</Close>}
  >
    {text.substring(0, 100)}
    <StyledNavLink to={`/news/${id}`}>Open news</StyledNavLink>
  </Card>
);
