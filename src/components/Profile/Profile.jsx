import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({
  updatePhoto,
  owner,
  updateProfile,
  profile,
  status,
  updateStatus,
}) => (
  <div>
    <ProfileInfo
      updatePhoto={updatePhoto}
      isOwner={owner}
      updateProfile={updateProfile}
      profile={profile}
      status={status}
      updateStatus={updateStatus}
    />
    <MyPostsContainer />
  </div>
);

export default Profile;
