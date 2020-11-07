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
import { Profile } from "./Profile";

const ProfileContainer = (props) => {
  const updateProfile = () => {
    let userId = props.match.params.userId;

    if (!userId) {
      userId = props.authorizedUserId;
    }
    props.getProfile(userId);
    props.getStatus(userId);
  };

  useEffect(() => {
    updateProfile();
  }, []);

  useEffect(() => {
    updateProfile();
  }, [props.match.params.userId]);

  return (
    <Profile
      {...props}
      owner={!props.match.params.userId}
    />
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
)(ProfileContainer);
