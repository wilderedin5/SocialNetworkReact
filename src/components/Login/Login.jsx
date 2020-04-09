import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import style from './Login.module.css';

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div className={style.loginPage} >
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;