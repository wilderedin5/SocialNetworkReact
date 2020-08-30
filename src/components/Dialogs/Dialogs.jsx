import React from "react";
import styled from "@emotion/styled";
import { Redirect } from "react-router-dom";
import DialogsForm from "./DialogsForm/DialogsForm";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
`;

const Dialog = styled.div`
  border-bottom: 1px solid rgb(235, 235, 235);
  margin-bottom: 20px;
  display: flex;
`;

const Messages = styled.div``;

const Dialogs = ({
  match,
  addMessage,
  isAuth,
  dialogsData,
  deleteMessage,
  deleteAllMessages,
}) => {
  let userId = Number(match.params.userId);
  if (!userId) {
    userId = 1;
  }

  let AddMessage = (formData) => {
    addMessage(formData.dialogsMessageText, userId);
  };

  if (!isAuth) return <Redirect to="/login" />;

  return (
    <Container>
      <Dialog>
        {dialogsData.map((d) => (
          <DialogItem key={d.id} {...d} />
        ))}
      </Dialog>
      <Messages>
        {dialogsData[userId - 1].messages.map((m) => (
          <MessageItem
            key={m.id}
            userId={userId}
            deleteMessage={deleteMessage}
            {...m}
          />
        ))}
        <DialogsForm
          id={userId}
          deleteAllMessages={deleteAllMessages}
          onSubmit={AddMessage}
        />
      </Messages>
    </Container>
  );
};

export default Dialogs;
