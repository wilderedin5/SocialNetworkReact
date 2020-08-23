import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Button as BaseButton, Avatar } from "antd";
import userPhoto from "../../../assets/image/defaultAVA.jpg";

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
  font-size: 14px;
  & span {
    font-weight: 700;
    font-size: 22px;
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 5px;
    border: 1px solid rgb(45, 80, 165);
  }
`;

const Button = styled(BaseButton)`
  &:disabled {
    background: rgb(128, 128, 128);
    color: #000;
  }
`;

const User = ({ isFollowingProgress, unfollow, follow, user }) => (
  <Container>
    <AvatarContainer>
      <NavLink to={"/profile/" + user.id}>
        <Avatar
          src={user.photos.small != null ? user.photos.small : userPhoto}
          alt=""
          size={64}
        />
      </NavLink>
      {user.followed ? (
        <Button
          disabled={isFollowingProgress.some((key) => key === user.id)}
          onClick={() => {
            unfollow(user.id);
          }}
        >
          Subscribe
        </Button>
      ) : (
        <Button
          disabled={isFollowingProgress.some((key) => key === user.id)}
          onClick={() => {
            follow(user.id);
          }}
        >
          Unsubscribe
        </Button>
      )}
    </AvatarContainer>
    <Info>
      <div>
        <span>Name:</span> {user.name}
      </div>
      <div>
        <span>Status:</span> {user.status ? user.status : "Not filled!"}
      </div>
    </Info>
  </Container>
);

export default User;
