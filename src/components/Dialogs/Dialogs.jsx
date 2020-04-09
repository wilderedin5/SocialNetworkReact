import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { Redirect } from 'react-router-dom';
import DialogsForm from './DialogsForm/DialogsForm';


const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messageElements = props.messageData.map(m => <MessageItem message={m.message} />);


    let AddMessage = (formData) => {
        props.addMessage(formData.dialogsMessageText);
    };

    if(!props.isAuth) return <Redirect to="/login" />

    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messageElements}
                <DialogsForm onSubmit={AddMessage} />
            </div>
        </div>
    );
}

export default Dialogs;