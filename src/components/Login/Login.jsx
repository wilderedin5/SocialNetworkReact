import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/auth-reducer";
import { LoginInfo } from "./login-info";
import LoginForm from "./login-form";

const Container = styled.div`
  margin-top: 50px;
  color: #000;
`;

const Login = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = ({ email, password, rememberMe, captcha }) => {
    login(
      email,
      password,
      rememberMe,
      captcha
    );
  };

  return isAuth ?
    <Redirect to="/profile" />
    :
    <Container>
      <LoginForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
      <LoginInfo />
    </Container>
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
