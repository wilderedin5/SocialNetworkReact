import React from 'react'
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
import { Advert } from './Advert'

const Adverts = (props) => {
  const advertId = +props.match.params.advertId;
  const filteredAdvert = props.advertising.filter((advert) => advert.id === advertId)

  return filteredAdvert.map((advert) => <Advert {...props} {...advert} />);
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
