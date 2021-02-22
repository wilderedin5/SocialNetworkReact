import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  getProfile,
  setStatus,
  getStatus,
  setPhoto,
  editProfile,
} from "../../redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Info } from "./profile-info";
import Posts from "./posts";

const Profile = ({
  profile,
  match,
  getProfile,
  getStatus,
  authorizedUserId,
  ...rest
}) => {
  const userId = match.params.userId || authorizedUserId;

  const editProfile = () => {
    getProfile(userId);
    getStatus(userId);
  };

  useEffect(() => {
    editProfile();
  }, [match.params.userId]);

  return (
    <div>
      {profile && (
        <Info isOwner={!match.params.userId} profile={profile} {...rest} />
      )}
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
    setStatus,
    setPhoto,
    editProfile,
  }),
  withRouter,
  withAuthRedirect
)(Profile);
