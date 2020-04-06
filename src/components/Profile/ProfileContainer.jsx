import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {getUsersProfile} from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';

class ProfileContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.match.params.userId;

        if(!userId){
            userId = 2;
        }
        this.props.getUsersProfile(userId);
    }
    render(){
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
} 

export default connect( mapStateToProps, {getUsersProfile} )(withRouter(ProfileContainer));