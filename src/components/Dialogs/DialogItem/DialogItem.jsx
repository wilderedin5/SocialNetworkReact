import React from 'react';
import style from './DialogItem.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} className={style.name} activeClassName={style.activeDialogName}>
            <div className={style.dialogItem}>
                <img src={props.photo} alt="" className={style.avatar} />
                {props.name}
            </div>
        </NavLink>
    );
}

export default DialogItem;