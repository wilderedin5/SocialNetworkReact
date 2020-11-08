import styled from "@emotion/styled";
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
import { ProfileInfo } from "./ProfileInfo";
import MyPosts from "./MyPosts";

const Container = styled.div`
  color: #000;
`

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
    <Container>
      <ProfileInfo isOwner={!props.match.params.userId} {...props} />
      <MyPosts />
    </Container>
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
