import React from 'react';
import style from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';

const Users = (props) => {
    return (
        <div className={style.userPage}>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} />
            {
                props.users.map(user => (
                    <User isFollowingProgress={props.isFollowingProgress} unfollow={props.unfollow} follow={props.follow} user={user} />
                ))
            } 
        </div>
    );
}

export default Users;