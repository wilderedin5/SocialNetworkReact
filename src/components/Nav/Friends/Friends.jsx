import React from 'react';
import style from './Friends.module.scss';
import Friend from './Friend/Friend';

const Friends = (props) => {

    return (
        <div className={style.friends}>
            <div className={style.friendTitle}>My Friends</div>
            <div className={style.friendBar}>
                {
                    props.friends.map(friend => <Friend key={friend.id} name={friend.name} /> )
                }
            </div>
        </div>

    );
}

export default Friends;