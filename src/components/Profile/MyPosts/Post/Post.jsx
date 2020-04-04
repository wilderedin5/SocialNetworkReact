import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.avatar}>
                <img src="https://www.kino-teatr.ru/movie/kadr/36398/pv_82319.jpg" alt=""/>
            </div>
            <div className={style.message}>
                {props.message}
            </div>
            <div className={style.like}>
                {props.likeCount} like
            </div>
        </div>
    );
}

export default Post;