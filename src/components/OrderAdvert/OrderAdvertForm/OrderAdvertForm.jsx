import React from 'react';
import style from './OrderAdvertForm.module.scss';
import { Button } from 'antd';
import createFormElement from '../../../hoc/createFormElement/createFormElement';
import { maxLength, requiredField } from '../../../utils/validate/validateForm';
import { reduxForm, Field } from 'redux-form';

const maxLength1000 = maxLength(1000);
const maxLength100 = maxLength(100);
const Input = createFormElement("input");
const Textarea = createFormElement("textarea");

const OrderAdvertForm = (props) => (
    <form className={style.orderForm} onSubmit={props.handleSubmit} >
        <Field type="text" name="title" placeholder="Заголовок вашей рекламы..." component={Input} validate={[maxLength100, requiredField]} />
        <Field type="text" name="image" placeholder="Ссылка на картинку(превью)..." component={Input} validate={[maxLength1000, requiredField]} />
        <Field type="text" component={Textarea} name="text" placeholder="Текст вашей рекламы..." validate={[maxLength1000, requiredField]} />
        <Button type="primary" htmlType="submit">Добавить новость</Button>
        <div>
            {props.error ? props.error : null}
        </div>
    </form>
)

export default reduxForm({
    // a unique name for the form
    form: 'AdvertForm'
})(OrderAdvertForm)