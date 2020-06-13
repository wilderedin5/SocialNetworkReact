import { connect } from "react-redux"
import Adverts from "./Adverts";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { deleteCommentFromAdvert, toggleLikeCommentFromAdvert, addCommentToAdvert, toggleLikeAdvert } from "../../redux/adverts-reducer";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => ({
    advertising: state.adverts.advertising
});

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps,{deleteCommentFromAdvert,toggleLikeCommentFromAdvert,addCommentToAdvert, toggleLikeAdvert})
)(Adverts) ;