import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Avatar as BaseAvatar } from 'antd';

const Name = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px;
  color: #000;
  font-weight: 700;
  :not(:last-child) {
    margin-right: 20px;
  }
  &.active,
  :hover {
    color: rgb(45, 80, 165);
    margin-bottom: -1px;
    border-bottom: 1px solid rgb(45, 80, 165);
  }
`;

const Avatar = styled(BaseAvatar)`
  margin-right: 10px;
`

export const DialogItem = ({ id, photoUrl, name }) => (
  <Name to={`/dialogs/${id}`} activeClassName="active">
    <Avatar size={30} src={photoUrl} />
    {name}
  </Name>
);