import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import style from './Login.module.css';
import { connect } from 'react-redux';
import { loginIntoSocialNetwork } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginIntoSocialNetwork(formData.email,formData.password,formData.rememberMe);
    }
    if(props.isAuth){
        return <Redirect to="/profile" />
    }
    return (
        <div className={style.loginPage} >
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps,{loginIntoSocialNetwork})(Login);