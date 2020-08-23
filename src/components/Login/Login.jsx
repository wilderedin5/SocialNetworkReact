import React from "react";
import styled from "@emotion/styled";
import { Redirect } from "react-router-dom";
import LoginInfo from "./LoginInfo/LoginInfo";
import LoginForm from "./LoginForm/LoginForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  color: #000;
`;

const Login = ({ loginIntoSocialNetwork, isAuth, captchaUrl }) => {
  const onSubmit = (formData) => {
    loginIntoSocialNetwork(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <Container>
      <LoginForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
      <LoginInfo />
    </Container>
  );
};

export default Login;
