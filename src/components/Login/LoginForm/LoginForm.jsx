import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login" name="login" component="input" />
            </div>
            <div>
                <Field placeholder="pass" name="password" component="input" />
            </div>
            <div>
                <Field type="checkbox" name="remember" component="input" />
                Запомнить меня
            </div>
            <div>
                <button>LOGIN</button>
            </div>
        </form>
    )
}

export default reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);