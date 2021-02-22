import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Avatar } from "antd";

const Container = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px;
  font-weight: 700;
  color: #000;
  &.active {
    color: rgb(9, 78, 252);
  }
`;

const StyledAvatar = styled(Avatar)`
  margin-right: 10px;
`;

export const Dialog = ({ id, photoUrl, name }) => (
  <Container to={`/dialogs/${id}`} activeClassName="active">
    <StyledAvatar size={30} src={photoUrl} />
    {name}
  </Container>
);
