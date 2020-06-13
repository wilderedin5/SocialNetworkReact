import { connect } from "react-redux"
import Help from "./Help"
import { compose } from "redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => ({
    help: state.help.helpQA,
    contacts: state.help.contacts
});

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{})
)(Help);