import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { v4 } from "uuid";
import { manageDialog, eraseDialog } from "../../redux/dialogs-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Form from "./form";
import { Dialog } from "./dialog";
import { Message } from "./message";

const DialogsList = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(218, 218, 218);
  margin-bottom: 20px;
`;

const Dialogs = ({ match, manageDialog, dialogs, eraseDialog }) => {
  const userId = +match.params.userId || 1;
  const messages = dialogs[userId - 1].messages;

  const handleSubmit = ({ message }) => {
    const id = v4();
    manageDialog(userId, null, { id, message, isMy: true });
  };

  const handleErase = () => {
    eraseDialog(userId);
  };

  return (
    <div>
      <DialogsList>
        {dialogs.map((d) => (
          <Dialog key={d.id} {...d} />
        ))}
      </DialogsList>
      {messages.map(({ id, ...m }) => (
        <Message key={id} onRemove={() => manageDialog(userId, id)} {...m} />
      ))}
      <Form onErase={handleErase} onSubmit={handleSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
});

export default compose(
  connect(mapStateToProps, {
    manageDialog,
    eraseDialog,
  }),
  withAuthRedirect,
  withRouter
)(Dialogs);
