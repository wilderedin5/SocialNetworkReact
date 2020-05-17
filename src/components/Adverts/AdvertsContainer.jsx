import { connect } from "react-redux"
import Adverts from "./Adverts";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        advertising: state.adverts.advertising
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps,{})
)(Adverts) ;