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
    <span>
      <b>Данные для входа:</b>
    </span>
    <span>
      <b>Логин: </b>wildnefalem5@gmail.com
    </span>
    <span>
      <b>Пароль: </b>testmysoc876a
    </span>
    <span>Если будут проблемы, пишите, звоните.</span>
  </Container>
);

export default LoginInfo;
