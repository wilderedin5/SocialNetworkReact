import React from "react";
import styled from "@emotion/styled";
import { Redirect } from "react-router-dom";
import { LoginInfo } from "./login-info";
import LoginForm from "./login-form";

const Container = styled.div`
  margin-top: 50px;
  color: #000;
`;

export const Login = ({ login, isAuth, captchaUrl }) => {
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
