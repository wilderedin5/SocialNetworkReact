import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Avatar } from "antd";
import userPhoto from "../../assets/image/defaultAVA.jpg";
import { Button } from "../common/type";

const Container = styled.div`
  position: relative;
  border: 1px solid #2d50a5;
  padding: 10px;
`;

const StyledButton = styled(Button)`
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
      <StyledButton disabled={isFollowingProgress} onClick={handleFollow}>
        {followed ? "Subscribe" : "Unsubscribe"}
      </StyledButton>

      <div>Name: {name}</div>
      <div>Status:{status || "No data!"}</div>
    </Container>
  );
};
