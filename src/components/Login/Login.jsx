import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import style from './Login.module.scss';
import { Redirect } from 'react-router-dom';
import LoginInfo from './LoginInfo/LoginInfo';

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
            <LoginInfo />
        </div>
    )
}

export default Login;