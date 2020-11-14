import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import {
  deleteComment,
  toggleLike,
  addComment,
} from "../../redux/adverts-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Advert } from "./Advert";

const Adverts = ({
  advertising,
  match,
  deleteComment,
  toggleLike,
  addComment,
}) =>
  advertising.map(
    ({ id, image, title, text, comments }) =>
      id === +match.params.advertId && (
        <Advert
          key={title}
          addComment={addComment}
          contentProps={{ image, title, text }}
          commentProps={{ comments, deleteComment, toggleLike }}
          id={id}
        />
      )
  );

const mapStateToProps = (state) => ({
  advertising: state.adverts.advertising,
});

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, {
    deleteComment,
    toggleLike,
    addComment,
  })
)(Adverts);
