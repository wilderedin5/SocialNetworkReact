import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';


const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messageElements = props.messageData.map(m => <MessageItem message={m.message} />);

    let newMessageElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    };

    let onChangeMessage = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    };



    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messageElements}
                <textarea onChange={onChangeMessage} ref={newMessageElement} value={props.newMessageText}></textarea>
                <button onClick={ onAddMessage }>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;