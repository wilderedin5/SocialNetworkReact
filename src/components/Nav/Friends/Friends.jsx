import React from 'react';
import style from './Friends.module.scss';
import Friend from './Friend/Friend';
import { Divider } from 'antd';

const Friends = (props) => (
    <div className={style.friends}>
        <Divider className={style.friendsTitle} orientation="center">Друзья</Divider>
        <div className={style.friendBar}>
            {
                props.friends.map(friend => <Friend id={friend.id} key={friend.id} name={friend.name} />)
            }
        </div>
    </div>
)

export default Friends;