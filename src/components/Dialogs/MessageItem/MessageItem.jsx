import React from "react";
import styled from "@emotion/styled";
import { Button as BaseButton } from "antd";

const Message = styled.div`
  margin-bottom: 25px;
  border: 1px solid rgb(45, 80, 165);
  border-radius: 10px;
  padding: 10px 15px;
  font-weight: 700;
  position: relative;
  ${(p) =>
    !p.outMe &&
    `
        border: 1px solid rgb(20, 199, 35);
        color: rgb(20, 199, 35);
    `}
`;

const Button = styled(BaseButton)`
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  right: 5px;
`;

const MessageItem = ({ outMe, message, userId, id, deleteMessage }) => (
  <Message outMe={outMe}>
    <div>{message}</div>
    {outMe && (
      <Button onClick={() => deleteMessage(id, userId)}>Remove message</Button>
    )}
  </Message>
);

export default MessageItem;
