import React from 'react';
import userPhoto from '../../assets/image/avatar.png';
import style from './Users.module.css';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';

const Users = (props) => {
    return (
        <div className={style.userPage}>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />
            {
                props.users.map(u => (
                    <div>
                        <div className={style.userItem}>
                            <div className={style.avatar}>
                                <NavLink to={"/profile/" + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                                </NavLink>
                                {u.followed ? <button disabled={props.isFollowingProgress.some(key => key === u.id)} onClick={() => {
                                    props.unfollow(u.id);
                                }}>unfollow</button> : <button disabled={props.isFollowingProgress.some(key => key === u.id)} onClick={() => {
                                    props.follow(u.id);
                                }}>follow</button>}
                            </div>
                            <div className={style.mainInfo}>
                                <div className={style.fullname}>{u.name}</div>
                                <div className={style.status}>{u.status}</div>
                            </div>
                            <div className={style.location}>
                                <div className={style.country}>{"u.location.country"}</div>
                                <div className={style.city}>{"u.location.city"}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Users;