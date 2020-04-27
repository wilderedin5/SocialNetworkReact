import React from 'react';
import style from './User.module.scss';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../../assets/image/defaultAVA.jpg';

const User = ({isFollowingProgress,unfollow,follow,user}) => {
    return (
        <div>
            <div className={style.userItem}>
                <div className={style.avatar}>
                    <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" />
                    </NavLink>
                    {user.followed ? <button className={style.userBtn} disabled={isFollowingProgress.some(key => key === user.id)} onClick={() => {
                        unfollow(user.id);
                    }}>Подписаться</button> : <button className={style.userBtn} disabled={isFollowingProgress.some(key => key === user.id)} onClick={() => {
                        follow(user.id);
                    }}>Отписаться</button>}
                </div>
                <div className={style.mainInfo}>
                    <div className={style.fullname}><span>Имя:</span> {user.name}</div>
                    <div className={style.status}><span>Статус:</span> {user.status ? user.status : "Не заполнено!"}</div>
                </div>
            </div>
        </div>
    );
}

export default User;