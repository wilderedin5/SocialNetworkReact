import React from 'react';
import { Field, reduxForm } from 'redux-form';
import createFormElement from '../../../hoc/createFormElement/createFormElement';
import { maxLength, requiredField } from '../../../utils/validate/validateForm';
import { Button } from 'antd';
import style from './AdvertForm.module.scss';

const maxLength250 = maxLength(250);
const maxLength60 = maxLength(60);
const Textarea = createFormElement("textarea");
const Input = createFormElement("input");

const AdvertForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"commentText"} placeholder="Ваше сообщение..." validate={[requiredField, maxLength250]} />
            </div>
            <div>
                <Field component={Input} name={"name"} placeholder="Имя.." validate={[requiredField, maxLength60]} />
            </div>
            <div>
                <Button type="primary" htmlType="submit">Отправить</Button>
            </div>
        </form>
    )
}

export default reduxForm({
    // a unique name for the form
    form: 'AdvertForm'
})(AdvertForm)