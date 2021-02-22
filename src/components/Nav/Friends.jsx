import React from "react";
import styled from "@emotion/styled";
import { Avatar } from "antd";
import { NavLink } from "react-router-dom";
import NoImg from "../../assets/image/NoImg.jpg";
import { Divider } from "../common/type";

const Container = styled.div`
  padding: 0 20px;

  @media (max-width: 576px) {
    display: none;
  }
`;

const Link = styled(NavLink)`
  text-align: center;
  color: #fff;

  &.active {
    color: red;
  }
`;

const Name = styled.div`
  font-size: 6px;
  margin-top: 4px;
`;

const Friend = ({ name, id }) => (
  <Link to={`/profile/${id}`} activeClassName="active">
    <Avatar src={NoImg} size={26} />
    <Name>{name.slice(0, 10)}</Name>
  </Link>
);

const FriendList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

export const Friends = ({ friends }) => (
  <Container>
    <Divider title="Friends" />
    <FriendList>
      {friends.map((friend, index) => (
        <Friend key={index} {...friend} />
      ))}
    </FriendList>
  </Container>
);
