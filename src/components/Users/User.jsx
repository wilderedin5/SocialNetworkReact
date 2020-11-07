import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Button as BaseButton, Avatar } from "antd";
import userPhoto from "../../assets/image/defaultAVA.jpg";

const Container = styled.div`
  border: 1px solid rgb(45, 80, 165);
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  color: #000;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled(BaseButton)`
  :disabled {
    background: rgb(128, 128, 128);
    color: #000;
  }
`;

export const User = ({ isFollowingProgress, unfollow, follow, user }) => {
  const followProgressActive = isFollowingProgress.some(id => id === user.id)

  const handleFollow = () => {
    user.followed ? unfollow(user.id) : follow(user.id)
  }

  return (
    <Container>
      <AvatarContainer>
        <NavLink to={"/profile/" + user.id}>
          <Avatar src={user.photos.small || userPhoto} size={60} />
        </NavLink>
        <Button disabled={followProgressActive} onClick={handleFollow}>
          {user.followed ? "Subscribe" : "Unsubscribe"}
        </Button>
      </AvatarContainer>
      <Info>
        <div>
          Name: {user.name}
        </div>
        <div>
          Status:{user.status ? user.status : "Not filled!"}
        </div>
      </Info>
    </Container>
  )
};
