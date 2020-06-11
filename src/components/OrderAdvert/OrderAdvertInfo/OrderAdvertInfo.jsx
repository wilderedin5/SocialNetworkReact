import React from 'react';
import style from './OrderAdvertInfo.module.scss';

const OrderAdvertInfo = (props) => {
    return (
        <div className={style.info}>
            <div><b>Заголовок:</b> {props.title}</div>
            <div><b>Текст рекламы:</b> {props.text}</div>
        </div>
    )
}

export default OrderAdvertInfo;