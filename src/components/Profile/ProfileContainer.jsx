import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUsersProfile, updateStatus, getStatus, updatePhoto, updateProfile } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { useEffect } from 'react';

const ProfileContainer = (props) => {
    const updateProfile = () => {
        let userId = props.match.params.userId;

        if (!userId) {
            userId = props.authorizedUserId;
        }
        props.getUsersProfile(userId);
        props.getStatus(userId);
    }
    
    useEffect(() => {
        updateProfile()
    }, []);

    useEffect(() => {
        updateProfile()
    }, [props.match.params.userId]);

    return (
        <Profile {...props} updatePhoto={props.updatePhoto} owner={!props.match.params.userId}
        profile={props.profile} status={props.status} updateStatus={props.updateStatus} updateProfile={props.updateProfile} />
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus, updatePhoto, updateProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);