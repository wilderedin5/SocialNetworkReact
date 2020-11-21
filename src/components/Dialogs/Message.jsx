import React from "react";
import styled from "@emotion/styled";
import { Button } from "../common/type";

const Container = styled.div`
  position: relative;
  margin-bottom: 25px;
  border: 1px solid
    ${(p) => (p.outMe ? " rgb(45, 80, 165)" : "rgb(20, 199, 35)")};
  border-radius: 10px;
  padding: 10px 15px;
  font-weight: 700;
  color: ${(p) => (p.outMe ? "#000" : "rgb(20, 199, 35)")};
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  right: 5px;
`;

export const Message = ({ outMe, message, deleteMessage }) => (
  <Container outMe={outMe}>
    {message}
    {outMe && (
      <StyledButton onClick={deleteMessage}>Remove message</StyledButton>
    )}
  </Container>
);
