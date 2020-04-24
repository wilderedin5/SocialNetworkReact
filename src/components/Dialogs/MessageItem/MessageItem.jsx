import React from 'react';
import style from './MessageItem.module.scss';
import cn from "classnames";


const MessageItem = (props) => {
    return(
        <div className={cn(style.message, {[style.messageToMe] : !props.outMe})}>
            <div>{props.message}</div>
            { props.outMe &&
                <button onClick={() => props.deleteMessage(props.id,props.userId)} className={style.messageDeleteBtn}>Удалить сообщение</button>
            }
        </div>
    );
}

export default MessageItem;