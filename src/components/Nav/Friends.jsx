import React from "react";
import styled from "@emotion/styled";
import { Avatar } from "antd";
import { NavLink } from "react-router-dom";
import NoAvatar from "../../assets/image/noAvatar.jpg";
import { Divider } from "../common/shared/type";

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

const Friend = ({ name, id }) => (
  <Link to={`/profile/${id}`} activeClassName="active">
    <Avatar src={NoAvatar} size={30} />
    <Name>{name.slice(0, 10)}</Name>
  </Link>
);

const Container = styled.div`
  padding: 0 20px;
  @media (max-width: 576px) {
    display: none;
  }
`;

const Panel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const Friends = ({ friends }) => (
  <Container>
    <Divider title="Friends" />
    <Panel>
      {friends.map((friend) => (
        <Friend key={friend.id} {...friend} />
      ))}
    </Panel>
  </Container>
);
