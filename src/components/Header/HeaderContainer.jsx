import Header from './Header';
import { connect } from 'react-redux';
import {logoutFromSocialNetwork} from '../../redux/auth-reducer';

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage.profile
});

export default connect(mapStateToProps,{logoutFromSocialNetwork})(Header);