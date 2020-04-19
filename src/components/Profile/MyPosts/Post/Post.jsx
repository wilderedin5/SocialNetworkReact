import React from 'react';
import style from './Post.module.css'

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
            
            <button className={style.deleteBtn} onClick={() => props.deletePost(props.postId)}>удалить пост</button>
            <button  onClick={() => props.toggleLikePost(props.postId)}> { (props.liked === false || props.liked === null) ? "поставить лайк" : "отменить лайк" } </button>
        </div>
    );
}

export default Post;