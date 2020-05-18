import React from 'react';
import { Tooltip, Avatar, Comment } from 'antd';
import style from './Comment.module.scss';
import { DislikeOutlined, LikeOutlined, DislikeFilled} from '@ant-design/icons';

const CommentAdvert = (props) => {
    const actions = [
        props.liked ?
            <span key="comment-basic-like">
                <Tooltip title="Like">
                    {React.createElement(props.liked === true ? DislikeFilled : LikeOutlined, {
                        onClick: () => props.toggleLikeCommentFromAdvert(props.advertId, props.id)
                    })}
                </Tooltip>
                <span className="comment-action">{props.likeCount}</span>
            </span>
            :
            <span key=' key="comment-basic-dislike"'>
                <Tooltip title="Dislike">
                    {React.createElement(
                        props.liked === false || props.liked === null ? LikeOutlined : DislikeOutlined,
                        {
                            onClick: () => props.toggleLikeCommentFromAdvert(props.advertId, props.id)
                        }
                    )}
                </Tooltip>
                <span className="comment-action">{props.likeCount}</span>
            </span>,
        <span onClick={() => props.deleteCommentFromAdvert(props.advertId, props.id)}>удалить пост</span>
    ];
    return (
        <Comment className={style.comment}
            author={<a>{props.name}</a>}
            actions={actions}
            avatar={
                <Avatar
                    size={"large"}
                    shape="circle"
                    src={props.avatar ? props.avatar : "https://www.kino-teatr.ru/movie/kadr/36398/pv_82319.jpg"}
                    alt="Han Solo"
                />}
            content={<p>{props.comment}</p>} />
    )
}

export default CommentAdvert;