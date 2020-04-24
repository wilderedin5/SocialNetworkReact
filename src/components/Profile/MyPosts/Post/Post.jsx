import React from 'react';
import style from './Post.module.scss'

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.avatar}>
                <img src="https://www.kino-teatr.ru/movie/kadr/36398/pv_82319.jpg" alt="" />
            </div>
            <div className={style.message}>
                {props.message}
                <div className={style.like}>
                    {props.likeCount} like
                </div>
            </div>
            <div className={style.postBtnLine}>
                <button onClick={() => props.toggleLikePost(props.postId)}> {(props.liked === false || props.liked === null) ? "поставить лайк" : "отменить лайк"} </button>
                <button onClick={() => props.deletePost(props.postId)}>удалить пост</button>
            </div>
        </div>
    );
}

export default Post;