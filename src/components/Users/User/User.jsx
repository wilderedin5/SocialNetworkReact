import React from 'react';
import style from './User.module.scss';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../../assets/image/defaultAVA.jpg';
import { Button, Avatar } from 'antd';

const User = ({ isFollowingProgress, unfollow, follow, user }) => (
    <div>
        <div className={style.userItem}>
            <div className={style.avatar}>
                <NavLink to={"/profile/" + user.id}>
                    <Avatar src={user.photos.small != null ? user.photos.small : userPhoto} alt="" size={64} />
                </NavLink>
                {user.followed ? <Button disabled={isFollowingProgress.some(key => key === user.id)} onClick={() => {
                    unfollow(user.id);
                }}>Подписаться</Button> : <Button disabled={isFollowingProgress.some(key => key === user.id)} onClick={() => {
                    follow(user.id);
                }}>Отписаться</Button>}
            </div>
            <div className={style.mainInfo}>
                <div className={style.fullname}><span>Имя:</span> {user.name}</div>
                <div className={style.status}><span>Статус:</span> {user.status ? user.status : "Не заполнено!"}</div>
            </div>
        </div>
    </div>
)

export default User;