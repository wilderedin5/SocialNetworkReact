import React from 'react';
import style from './User.module.css';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../../assets/image/avatar.png';

const User = ({isFollowingProgress,unfollow,follow,user}) => {
    return (
        <div>
            <div className={style.userItem}>
                <div className={style.avatar}>
                    <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" />
                    </NavLink>
                    {user.followed ? <button disabled={isFollowingProgress.some(key => key === user.id)} onClick={() => {
                        unfollow(user.id);
                    }}>unfollow</button> : <button disabled={isFollowingProgress.some(key => key === user.id)} onClick={() => {
                        follow(user.id);
                    }}>follow</button>}
                </div>
                <div className={style.mainInfo}>
                    <div className={style.fullname}>{user.name}</div>
                    <div className={style.status}>{user.status}</div>
                </div>
                <div className={style.location}>
                    <div className={style.country}>{"user.location.country"}</div>
                    <div className={style.city}>{"user.location.city"}</div>
                </div>
            </div>
        </div>
    );
}

export default User;