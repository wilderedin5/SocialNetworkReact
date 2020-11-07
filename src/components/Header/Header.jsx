import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Button as BaseButton, Avatar as BaseAvatar } from "antd";
import NoAvatar from '../../assets/image/noAvatar.jpg'

const Authorized = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const NoAuthorized = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled(BaseButton)`
  align-self: center;
  background: transparent;
  color: #fff;
  outline: none;
  margin: 0;
  :hover {
    background: #fff;
    color: rgb(45, 80, 165);
  }
`

const Info = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 22px;
`;

const Avatar = styled(BaseAvatar)`
  margin-right: 10px;
`

export const Header = ({ isAuth, profile, login, logout }) => (
  <div>
    {isAuth ? (
      <Authorized>
        <Info>
          <Avatar src={60} src={profile?.photos.small || NoAvatar} />
          {login}
        </Info>
        <Button onClick={logout}>Log out</Button>
      </Authorized>
    ) : (
        <NoAuthorized>
          <NavLink to="/login">
            <Button>Login</Button>
          </NavLink>
        </NoAuthorized>
      )}
  </div>
);