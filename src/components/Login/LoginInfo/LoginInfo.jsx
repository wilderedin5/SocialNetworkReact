import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(45, 80, 165);
  max-width: 40%;
  padding: 10px;
`;

const LoginInfo = () => (
  <Container>
    <span>Login: wildnefalem5@gmail.com</span>
    <span>Password: testmysoc876a</span>
    <span>If you have any problems, please contact me.</span>
  </Container>
);

export default LoginInfo;
