import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './LoginForm.module.scss';
import {maxLength,requiredField} from '../../../utils/validate/validateForm';
import createFormElement from '../../../hoc/createFormElement/createFormElement';


const maxLength100 = maxLength(100);
const Input = createFormElement("input");

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.loginForm} >
            <div>
                <Field placeholder="Login" name="email" component={Input} type="text" validate={[maxLength100,requiredField]} />
            </div>
            <div>
                <Field placeholder="pass" name="password" component={Input} type="password" validate={[maxLength100,requiredField]} />
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component="input" />
                Запомнить меня
            </div>
            <div>
                <button className={style.loginBtn} >LOGIN</button>
            </div>
            <div>
                { props.captchaUrl && <img src={props.captchaUrl} alt=""/>}
                { props.captchaUrl && <Field type="text" name="captcha" component={Input} validate={[requiredField]} />}
            </div>
            <div>
                {props.error ? props.error : null}
            </div>
        </form>
    )
}

export default reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);