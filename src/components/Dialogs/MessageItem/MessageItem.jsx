import React from 'react';
import style from './MessageItem.module.scss';
import cn from "classnames";
import { Button } from 'antd';


const MessageItem = (props) => (
    <div className={cn(style.message, { [style.messageToMe]: !props.outMe })}>
        <div>{props.message}</div>
        {props.outMe &&
            <Button onClick={() => props.deleteMessage(props.id, props.userId)} className={style.messageDeleteBtn}>Удалить сообщение</Button>
        }
    </div>
)

export default MessageItem;