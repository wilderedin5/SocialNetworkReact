import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

const Authorized = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  button {
    align-self: center;
    background: transparent;
    color: #fff;
    outline: none;
    margin: 0;
    &:hover {
      background: #fff;
      color: rgb(45, 80, 165);
    }
  }
`;

const NoAuthorized = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    align-self: center;
    background: transparent;
    color: #fff;
    outline: none;
    margin: 0;
    &:hover {
      background: #fff;
      color: rgb(45, 80, 165);
    }
  }
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #fff;
  margin-right: 10px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

const Name = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

const Header = ({ isAuth, profile, login, logout }) => (
  <div>
    {isAuth ? (
      <Authorized>
        <Info>
          <Avatar src={profile && profile.photos.small} alt="" />
          <Name>{login}</Name>
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

export default Header;
