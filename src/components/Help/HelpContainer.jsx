import { connect } from "react-redux"
import Help from "./Help"

const mapStateToProps = (state) => ({
    help: state.help.helpQA
});

export default connect(mapStateToProps,{})(Help);