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
    (adv) =>
      adv.id === +match.params.advertId && (
        <Advert
          key={adv.title}
          deleteComment={deleteComment}
          toggleLike={toggleLike}
          addComment={addComment}
          {...adv}
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
