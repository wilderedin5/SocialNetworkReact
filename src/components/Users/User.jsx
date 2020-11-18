import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Button as BaseButton, Avatar } from "antd";
import userPhoto from "../../assets/image/defaultAVA.jpg";

const Container = styled.div`
  position: relative;
  border: 1px solid rgb(45, 80, 165);
  padding: 10px;
`;

const Button = styled(BaseButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  :disabled {
    background: rgb(128, 128, 128);
  }
`;

export const User = ({ isFollowing, unfollow, follow, user }) => {
  const isFollowingProgress = isFollowing.some((id) => id === user.id);
  const { id, followed, status, name, photos } = user;

  const handleFollow = () => {
    followed ? unfollow(id) : follow(id);
  };

  return (
    <Container>
      <NavLink to={`/profile/${id}`}>
        <Avatar src={photos.small || userPhoto} size={60} />
      </NavLink>
      <Button disabled={isFollowingProgress} onClick={handleFollow}>
        {followed ? "Subscribe" : "Unsubscribe"}
      </Button>

      <div>Name: {name}</div>
      <div>Status:{status || "No data!"}</div>
    </Container>
  );
};
