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
import DialogsForm from "./dialog-form";
import { DialogItem } from "./dialog-item";
import { MessageItem } from "./dialog-message";

const Container = styled.div``;

const Dialog = styled.div`
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
    <div>
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
    </div>
  </Container> : <Redirect to="/login" />
  )
};

let mapStateToProps = (state) => ({
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
