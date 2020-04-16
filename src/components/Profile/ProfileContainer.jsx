import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUsersProfile, updateStatus, getStatus, updatePhoto } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    updateProfile(){
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);
    }
    componentDidMount() {
        this.updateProfile();
    }
    componentDidUpdate(prevProps,prevState){
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.updateProfile();
        }
    }
    render() {
        return (
            <Profile {...this.props} updatePhoto={this.props.updatePhoto} owner={!this.props.match.params.userId}
            profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
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
    connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus, updatePhoto }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);