import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useParams } from "react-router-dom";
import { manageComment, changeLikeCount } from "../../redux/adverts-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Advert } from "./advert";

const Adverts = ({ adverts, manageComment, changeLikeCount }) => {
  const { advertId } = useParams();

  return adverts.map(
    ({ id, img, title, text, comments }) =>
      id === +advertId && (
        <Advert
          key={title}
          onManage={manageComment}
          contentProps={{ img, title, text }}
          commentProps={{ comments, changeLikeCount }}
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
  connect(mapStateToProps, { manageComment, changeLikeCount })
)(Adverts);
