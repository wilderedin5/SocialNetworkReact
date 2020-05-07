import React from 'react';
import style from './Post.module.scss'
import { Tooltip, Comment, Avatar } from 'antd';
import { DislikeOutlined, LikeOutlined, DislikeFilled} from '@ant-design/icons';

const Post = (props) => {
    const actions = [
        props.liked ?
            <span key="comment-basic-like">
                <Tooltip title="Like">
                    {React.createElement(props.liked === true ? DislikeFilled : LikeOutlined, {
                        onClick: () => props.toggleLikePost(props.id)
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
                            onClick: () => props.toggleLikePost(props.id)
                        }
                    )}
                </Tooltip>
                <span className="comment-action">{props.likeCount}</span>
            </span>,
        <span onClick={() => props.deletePost(props.id)}>удалить пост</span>
    ];
    return (
        <Comment className={style.post}
            author={<a>{props.name}</a>}
            actions={actions}
            avatar={
                <Avatar
                    size={"large"}
                    shape="circle"
                    src={props.avatar ? props.avatar : "https://www.kino-teatr.ru/movie/kadr/36398/pv_82319.jpg"}
                    alt="Han Solo"
                />} 
            content={<p>{props.message}</p>} />
    );
}

export default Post;
