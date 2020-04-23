import React from 'react';
import style from './MessageItem.module.scss';

const MessageItem = (props) => {
    return(
        <div className={style.message}>
            <div>{props.message}</div>
            <button onClick={() => props.deleteMessage(props.id,props.userId)} className={style.messageDeleteBtn}>Удалить сообщение</button>
        </div>
    );
}

export default MessageItem;