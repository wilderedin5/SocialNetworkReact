import React from 'react';
import style from './DialogItem.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.dialogItem}>
            <img src={props.photo} alt="" className={style.avatar} />
            <NavLink to={path} className={style.name} activeClassName={style.activeDialogName}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;