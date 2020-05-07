import React from 'react';
import style from './Users.module.scss';
import User from './User/User';
import { Pagination } from 'antd';

const Users = (props) => {
    return (
        <div className={style.userPage}>
            <Pagination className={style.pagination} defaultCurrent={1} current={props.currentPage} total={props.totalUsersCount} onChange={props.onPageChanged} showSizeChanger={false} />
            {
                props.users.map(user => (
                    <User key={user.id} isFollowingProgress={props.isFollowingProgress} unfollow={props.unfollow} follow={props.follow} user={user} />
                ))
            } 
        </div>
    );
}

export default Users;