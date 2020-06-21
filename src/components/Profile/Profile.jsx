import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => (
    <div>
        <ProfileInfo updatePhoto={props.updatePhoto} isOwner={props.owner} updateProfile={props.updateProfile}
            profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
        <MyPostsContainer />
    </div>
)

export default Profile;