import React from 'react';
import userPhoto from '../../assets/image/avatar.png';
import style from './Users.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={style.userPage}>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p && style.selectedPage}
                            onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                    })
                }
            </div>
            {
                props.users.map(u => (
                    <div>
                        <div className={style.userItem}>
                            <div className={style.avatar}>
                                <NavLink to={"/profile/" + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                                </NavLink>
                                {u.followed ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: { "API-KEY": "214badae-3b19-4362-9fbb-9abb5bfbc019" }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        });
                                }}>unfollow</button> : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: { "API-KEY": "214badae-3b19-4362-9fbb-9abb5bfbc019" }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        });
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