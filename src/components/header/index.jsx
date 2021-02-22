import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Avatar } from "antd";
import NoImg from "../../assets/image/NoImg.jpg";
import { logout } from "../../redux/auth-reducer";
import { Button } from "../common/type";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const StyledAvatar = styled(Avatar)`
  margin-right: 10px;
`;

const Header = ({ isAuth, profile, login, logout }) => (
  <Container>
    {isAuth ? (
      <>
        <div>
          <StyledAvatar src={60} src={profile?.photos.small || NoImg} />
          {login}
        </div>
        <Button onClick={logout}>Log out</Button>
      </>
    ) : (
      <NavLink to="/login">
        <Button>Login</Button>
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
