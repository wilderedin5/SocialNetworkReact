import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import {
  addMessage,
  deleteMessage,
  eraseDialog,
} from "../../redux/dialogs-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Form from "./form";
import { Dialog } from "./dialog";
import { Message } from "./message";

const DialogsList = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(218, 218, 218);
  margin-bottom: 20px;
`;

const Dialogs = ({
  match,
  addMessage,
  dialogs,
  deleteMessage,
  eraseDialog,
}) => {
  const userId = +match.params.userId || 1;
  const messages = dialogs[userId - 1].messages;

  const handleSubmit = ({ message }) => {
    addMessage(message, userId);
  };

  return (
    <div>
      <DialogsList>
        {dialogs.map((d) => (
          <Dialog key={d.id} {...d} />
        ))}
      </DialogsList>
      {messages.map(({ id, ...m }) => (
        <Message key={id} onRemove={() => deleteMessage(id, userId)} {...m} />
      ))}
      <Form eraseDialog={() => eraseDialog(userId)} onSubmit={handleSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
});

export default compose(
  connect(mapStateToProps, {
    addMessage,
    deleteMessage,
    eraseDialog,
  }),
  withAuthRedirect,
  withRouter
)(Dialogs);
