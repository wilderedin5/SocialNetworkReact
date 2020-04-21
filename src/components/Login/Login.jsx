import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import style from './Login.module.scss';
import { connect } from 'react-redux';
import { loginIntoSocialNetwork } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginIntoSocialNetwork(formData.email,formData.password,formData.rememberMe,formData.captcha);
    }
    if(props.isAuth){
        return <Redirect to="/profile" />
    }
    return (
        <div className={style.loginPage} >
            <LoginForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps,{loginIntoSocialNetwork})(Login);