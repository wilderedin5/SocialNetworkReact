import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  getProfile,
  updateStatus,
  getStatus,
  updatePhoto,
  updateProfile,
} from "../../redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Info } from "./Info";
import Posts from "./Posts";

const Profile = (props) => {
  const userId = props.match.params.userId || props.authorizedUserId;

  const updateProfile = () => {
    props.getProfile(userId);
    props.getStatus(userId);
  };

  useEffect(() => {
    updateProfile();
  }, [props.match.params.userId]);

  return (
    <div>
      <Info isOwner={!props.match.params.userId} {...props} />
      <Posts />
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
});

export default compose(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
    updatePhoto,
    updateProfile,
  }),
  withRouter,
  withAuthRedirect
)(Profile);
