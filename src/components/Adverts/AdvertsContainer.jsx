import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import {
  deleteComment,
  likeComment,
  addComment,
  toggleLike,
} from "../../redux/adverts-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Adverts } from "./Adverts";

const mapStateToProps = (state) => ({
  advertising: state.adverts.advertising,
});

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, {
    deleteComment,
    likeComment,
    addComment,
    toggleLike,
  })
)(Adverts);
