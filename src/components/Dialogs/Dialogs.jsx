import React from "react";
import styled from "@emotion/styled";
import { Redirect } from "react-router-dom";
import DialogsForm from "./dialog-form";
import { DialogItem } from "./dialog-item";
import { MessageItem } from "./dialog-message";

const Container = styled.div``;

const Dialog = styled.div`
  border-bottom: 1px solid rgb(218, 218, 218);
  margin-bottom: 20px;
  display: flex;
`;

const Messages = styled.div``;

export const Dialogs = ({
  match,
  addMessage,
  isAuth,
  dialogsData,
  deleteMessage,
  deleteAllMessages,
}) => {
  let userId = Number(match.params.userId) || 1;

  let AddMessage = (formData) => {
    addMessage(formData.dialogsMessageText, userId);
  };

  return (isAuth ? <Container>
    <Dialog>
      {
        dialogsData.map((d) => (
          <DialogItem key={d.id} {...d} />
        ))
      }
    </Dialog>
    <Messages>
      {dialogsData[userId - 1].messages.map(({ id, ...m }) => (
        <MessageItem
          key={id}
          deleteMessage={() => deleteMessage(id, userId)}
          {...m}
        />
      ))}
      <DialogsForm
        id={userId}
        deleteAllMessages={deleteAllMessages}
        onSubmit={AddMessage}
      />
    </Messages>
  </Container> : <Redirect to="/login" />
  )
};