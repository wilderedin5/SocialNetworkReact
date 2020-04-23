import Dialogs from './Dialogs';
import { addMessage, deleteMessage} from './../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { withRouter } from 'react-router-dom';

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData
    }
}

export default compose(
    connect(mapStateToProps, {deleteMessage,addMessage}),
    withAuthRedirect,
    withRouter
)(Dialogs);