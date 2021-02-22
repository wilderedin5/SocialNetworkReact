import React from "react";
import styled from "@emotion/styled";
import { Button } from "../common/type";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 5px 10px;
  border: 1px solid ${(p) => (p.outMe ? " #2D50A5" : "#14C723")};
  border-radius: 10px;
  color: ${(p) => (p.outMe ? "#000" : "#14C723")};
`;

export const Message = ({ outMe, message, onRemove }) => (
  <Container outMe={outMe}>
    {message}
    {outMe && <Button onClick={onRemove}>Remove message</Button>}
  </Container>
);
