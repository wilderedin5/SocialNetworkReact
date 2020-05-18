import React from 'react';
import style from './OneAdvert.module.scss';
import CommentAdvert from '../Comment/CommentAdvert';

const OneAdvert = (props) => {
    return (
        <div>
            <div className={style.image}>
                <img src={props.image} alt=""/>
            </div>
            <div className={style.title}>
                {props.title}
            </div>
            <div className={style.text}>
                {props.text}
            </div>
            <div>
                {
                    props.comment.map(comment => <CommentAdvert {...comment} toggleLikeCommentFromAdvert={props.toggleLikeCommentFromAdvert} advertId={props.id} deleteCommentFromAdvert={props.deleteCommentFromAdvert} />)
                }
            </div>
        </div>
    )
}

export default OneAdvert;