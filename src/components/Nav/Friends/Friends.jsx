import React from 'react';
import style from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {

    return (
        <div>
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