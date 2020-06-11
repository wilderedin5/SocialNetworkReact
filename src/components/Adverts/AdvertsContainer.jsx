import { connect } from "react-redux"
import Adverts from "./Adverts";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { deleteCommentFromAdvert, toggleLikeCommentFromAdvert, addCommentToAdvert, toggleLikeAdvert } from "../../redux/adverts-reducer";

const mapStateToProps = (state) => ({
    advertising: state.adverts.advertising
});

export default compose(
    withRouter,
    connect(mapStateToProps,{deleteCommentFromAdvert,toggleLikeCommentFromAdvert,addCommentToAdvert, toggleLikeAdvert})
)(Adverts) ;