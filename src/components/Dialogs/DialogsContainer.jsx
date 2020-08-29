import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import {
  addMessage,
  deleteMessage,
  deleteAllMessagesFromDialog,
} from "./../../redux/dialogs-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => ({
  dialogsData: state.dialogsPage.dialogsData,
});

export default compose(
  connect(mapStateToProps, {
    deleteMessage,
    addMessage,
    deleteAllMessagesFromDialog,
  }),
  withAuthRedirect,
  withRouter
)(Dialogs);
