import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/auth-reducer";
import { Info } from "./Info";
import Form from "./Form";

const Container = styled.div`
  margin-top: 50px;
  color: #000;
`;

const Login = ({ login, isAuth, captchaUrl }) => {
  const handleSubmit = ({ email, password, rememberMe, captcha }) => {
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
      <Form captchaUrl={captchaUrl} onSubmit={handleSubmit} />
      <Info />
    </Container>
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
