import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Avatar } from "antd";
import NoAvatar from '../../assets/image/noAvatar.jpg'

const Link = styled(NavLink)`
  text-align: center;
  color: #fff;
  &.active {
    color: red;
  }
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 6px;
`;

export const Friend = ({ name, id }) => (
  <Link to={`/profile/${id}`} activeClassName="active">
    <Avatar src={NoAvatar} size={30} />
    <Name>{name.slice(0, 10)}</Name>
  </Link>
);
