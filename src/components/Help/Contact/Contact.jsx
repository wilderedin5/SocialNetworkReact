import React from 'react';
import { Card } from 'antd';
import style from './Contact.module.scss';

const Contact = (props) => (
    <Card className={style.card} title={props.name} bordered={true}>
        <div><b>Должность:</b> {props.status}</div>
        <div><b>Телефон:</b> {props.phone}</div>
        <div><b>Email:</b> {props.email}</div>
        <div><b>По вопросам:</b> {props.description}</div>
    </Card>
)

export default Contact;