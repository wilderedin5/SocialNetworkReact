import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './LoginForm.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.loginForm} >
            <div>
                <Field placeholder="Login" name="login" component="input" className={style.inputText} />
            </div>
            <div>
                <Field placeholder="pass" name="password" component="input" className={style.inputText} />
            </div>
            <div>
                <Field type="checkbox" name="remember" component="input" />
                Запомнить меня
            </div>
            <div>
                <button className={style.loginBtn} >LOGIN</button>
            </div>
        </form>
    )
}

export default reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);