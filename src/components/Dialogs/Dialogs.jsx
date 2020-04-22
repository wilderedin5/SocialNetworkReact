import React from 'react';
import style from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { Redirect } from 'react-router-dom';
import DialogsForm from './DialogsForm/DialogsForm';


const Dialogs = (props) => {

    let AddMessage = (formData) => {
        props.addMessage(formData.dialogsMessageText);
    };

    if (!props.isAuth) return <Redirect to="/login" />

    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
                {
                    props.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)
                }
            </div>
            <div className={style.messages}>
                {
                    props.messageData.map(m => <MessageItem key={m.id} id={m.id} message={m.message} deleteMessage={props.deleteMessage} />)
                }
                <DialogsForm onSubmit={AddMessage} />
            </div>
        </div>
    );
}

export default Dialogs;