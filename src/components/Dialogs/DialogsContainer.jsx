import Dialogs from './Dialogs';
import { addMessage, deleteMessage,deleteAllMessagesFromDialog} from './../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { withRouter } from 'react-router-dom';

let mapStateToProps = (state) => ({
    dialogsData: state.dialogsPage.dialogsData
});

export default compose(
    connect(mapStateToProps, {deleteMessage,addMessage,deleteAllMessagesFromDialog}),
    withAuthRedirect,
    withRouter
)(Dialogs);