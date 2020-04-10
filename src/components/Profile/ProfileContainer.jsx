import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUsersProfile, updateStatus, getStatus } from './../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId
    }
}




export default compose(
    connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);