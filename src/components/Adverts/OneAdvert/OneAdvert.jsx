import React from 'react';
import style from './OneAdvert.module.scss';
import CommentAdvert from '../Comment/CommentAdvert';
import AdvertForm from '../AdvertForm/AdvertForm';
import { v4 } from 'uuid';

const OneAdvert = (props) => {

    const AddCommentToAdvert = (formData) => {
        props.addCommentToAdvert(props.id, v4(), formData.commentText, formData.name, false, 0);
    }


    return (
        <div>
            <div className={style.advertBlock}>
                <div className={style.image}>
                    <img src={props.image} alt="" />
                </div>
                <div className={style.advertContent}>
                    <div className={style.title}>
                        {props.title}
                    </div>
                    <div className={style.text}>
                        {props.text}
                    </div>
                </div>
            </div>
            <div className={style.commentBlock}>
                {
                    props.comment.map(comment => <CommentAdvert {...comment} toggleLikeCommentFromAdvert={props.toggleLikeCommentFromAdvert} advertId={props.id} deleteCommentFromAdvert={props.deleteCommentFromAdvert} />)
                }
            </div>
            <AdvertForm onSubmit={AddCommentToAdvert} />
        </div>
    )
}

export default OneAdvert;