import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  border: 1px solid rgb(45, 80, 165);
  max-width: 300px;
  margin: 0 auto;
  padding: 10px;
`;

export const Info = () => (
  <Container>
    <div>Login: wildnefalem5@gmail.com</div>
    <div>Password: testmysoc876a</div>
    <div>If you have any problems, please contact me.</div>
  </Container>
);
