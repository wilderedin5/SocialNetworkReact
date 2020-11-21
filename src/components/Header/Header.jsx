import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Avatar as BaseAvatar } from "antd";
import NoAvatar from "../../assets/image/noAvatar.jpg";
import { logout } from "../../redux/auth-reducer";
import { Button } from "../common/type";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledButton = styled(Button)`
  align-self: center;
  background: transparent;
  color: #fff;
  outline: none;
  margin: 0;
  :hover {
    background: #fff;
    color: rgb(45, 80, 165);
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 22px;
`;

const Avatar = styled(BaseAvatar)`
  margin-right: 10px;
`;

const Header = ({ isAuth, profile, login, logout }) => (
  <Container>
    {isAuth ? (
      <>
        <Info>
          <Avatar src={60} src={profile?.photos.small || NoAvatar} />
          {login}
        </Info>
        <StyledButton onClick={logout}>Log out</StyledButton>
      </>
    ) : (
      <NavLink to="/login">
        <StyledButton>Login</StyledButton>
      </NavLink>
    )}
  </Container>
);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { logout })(Header);
