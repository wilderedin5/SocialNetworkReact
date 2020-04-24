import React from 'react';
import style from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { Redirect } from 'react-router-dom';
import DialogsForm from './DialogsForm/DialogsForm';


const Dialogs = (props) => {
    let userId = Number(props.match.params.userId);
    if (!userId) {
        userId = 1;
    }

    let AddMessage = (formData) => {
        props.addMessage(formData.dialogsMessageText,userId);
    };
    
    if (!props.isAuth) return <Redirect to="/login" />

    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
                {
                    props.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id} photo={d.photoUrl} />)
                }
            </div>
            <div className={style.messages}>
                {
                    props.dialogsData[userId - 1].messages.map(m => <MessageItem key={m.id} userId={userId} id={m.id} message={m.message} outMe={m.outMe} deleteMessage={props.deleteMessage} />)
                }
                <DialogsForm onSubmit={AddMessage} />
            </div>
        </div>
    );
}

export default Dialogs;