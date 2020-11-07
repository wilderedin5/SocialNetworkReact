import { connect } from "react-redux"
import { compose } from "redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { Help } from "./Help"

const mapStateToProps = (state) => ({
    help: state.help.helpQA,
    contacts: state.help.contacts
});

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {})
)(Help);