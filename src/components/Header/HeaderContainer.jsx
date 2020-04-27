import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {logoutFromSocialNetwork} from '../../redux/auth-reducer';


const HeaderContainer = (props) => {
    return (
        <Header {...props} />
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps,{logoutFromSocialNetwork})(HeaderContainer);