import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useParams } from "react-router-dom";
import {
  deleteComment,
  changeLikeCount,
  addComment,
} from "../../redux/adverts-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Advert } from "./advert";

const Adverts = ({ adverts, deleteComment, changeLikeCount, addComment }) => {
  const { advertId } = useParams();

  return adverts.map(
    ({ id, img, title, text, comments }) =>
      id === +advertId && (
        <Advert
          key={title}
          addComment={addComment}
          contentProps={{ img, title, text }}
          commentProps={{ comments, deleteComment, changeLikeCount }}
          id={id}
        />
      )
  );
};
const mapStateToProps = (state) => ({
  adverts: state.adverts.adverts,
});

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { deleteComment, changeLikeCount, addComment })
)(Adverts);
