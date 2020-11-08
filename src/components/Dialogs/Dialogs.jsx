import React from "react";
import styled from "@emotion/styled";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import {
  addMessage,
  deleteMessage,
  deleteAllMessages,
} from "../../redux/dialogs-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Form from "./Form";
import { Dialog } from "./Dialog";
import { Message } from "./Message";

const Container = styled.div`
  color: #000;
`;

const DialogsList = styled.div`
  border-bottom: 1px solid rgb(218, 218, 218);
  margin-bottom: 20px;
  display: flex;
`;

const Dialogs = ({
  match,
  addMessage,
  isAuth,
  dialogsData,
  deleteMessage,
  deleteAllMessages,
}) => {
  const userId = Number(match.params.userId) || 1;

  const handleSubmit = ({ dialogsMessageText }) => {
    addMessage(dialogsMessageText, userId);
  };

  return (isAuth ? <Container>
    <DialogsList>
      {
        dialogsData.map((d) => (
          <Dialog key={d.id} {...d} />
        ))
      }
    </DialogsList>
    {dialogsData[userId - 1].messages.map(({ id, ...m }) => (
      <Message
        key={id}
        deleteMessage={() => deleteMessage(id, userId)}
        {...m}
      />
    ))}
    <Form
      id={userId}
      deleteAllMessages={deleteAllMessages}
      onSubmit={handleSubmit}
    />
  </Container> : <Redirect to="/login" />
  )
};

const mapStateToProps = (state) => ({
  dialogsData: state.dialogsPage.dialogsData,
});

export default compose(
  connect(mapStateToProps, {
    deleteMessage,
    addMessage,
    deleteAllMessages,
  }),
  withAuthRedirect,
  withRouter
)(Dialogs);
