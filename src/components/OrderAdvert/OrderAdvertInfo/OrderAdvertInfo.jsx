import React from 'react';
import style from './OrderAdvertInfo.module.scss';
import { Button } from 'antd';

const OrderAdvertInfo = (props) => (
    <div className={style.info}>
        <div><b>Заголовок:</b> {props.title}</div>
        <div><b>Текст рекламы:</b> {props.text}</div>
        <Button onClick={() => props.deleteAdvert(props.id)}>Удалить рекламу</Button>
    </div>
)

export default OrderAdvertInfo;