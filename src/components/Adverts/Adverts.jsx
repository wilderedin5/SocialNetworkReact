import React from "react";
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
import { Advert } from "./Advert";

const Adverts = (props) => {
  const advertId = +props.match.params.advertId;

  return props.advertising.map(
    (advert) =>
      advert.id === advertId && (
        <Advert key={advert.title} {...props} {...advert} />
      )
  );
};

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
