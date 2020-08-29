import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({ owner, ...props }) => (
  <div>
    <ProfileInfo isOwner={owner} {...props} />
    <MyPostsContainer />
  </div>
);

export default Profile;
