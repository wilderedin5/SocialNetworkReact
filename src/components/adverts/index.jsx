import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import {
  deleteComment,
  changeLikeCount,
  addComment,
} from "../../redux/adverts-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Advert } from "./advert";

const Adverts = ({
  adverts,
  match,
  deleteComment,
  changeLikeCount,
  addComment,
}) =>
  adverts.map(
    ({ id, img, title, text, comments }) =>
      id === +match.params.advertId && (
        <Advert
          key={title}
          addComment={addComment}
          contentProps={{ img, title, text }}
          commentProps={{ comments, deleteComment, changeLikeCount }}
          id={id}
        />
      )
  );

const mapStateToProps = (state) => ({
  adverts: state.adverts.adverts,
});

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, { deleteComment, changeLikeCount, addComment })
)(Adverts);
