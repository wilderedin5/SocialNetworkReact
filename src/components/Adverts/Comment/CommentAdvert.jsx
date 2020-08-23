import React from "react";
import { Tooltip, Avatar, Comment as BaseComment } from "antd";
import styled from "@emotion/styled";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
} from "@ant-design/icons";

const Comment = styled(BaseComment)`
  border: 1px solid grey;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 0 5px;
  color: #000;
`;

const CommentAdvert = (props) => {
  const actions = [
    props.liked ? (
      <span key="comment-basic-like">
        <Tooltip title="Like">
          {React.createElement(
            props.liked === true ? DislikeFilled : LikeOutlined,
            {
              onClick: () =>
                props.toggleLikeCommentFromAdvert(props.advertId, props.id),
            }
          )}
        </Tooltip>
        <span className="comment-action">{props.likeCount}</span>
      </span>
    ) : (
      <span key=' key="comment-basic-dislike"'>
        <Tooltip title="Dislike">
          {React.createElement(
            props.liked === false || props.liked === null
              ? LikeOutlined
              : DislikeOutlined,
            {
              onClick: () =>
                props.toggleLikeCommentFromAdvert(props.advertId, props.id),
            }
          )}
        </Tooltip>
        <span className="comment-action">{props.likeCount}</span>
      </span>
    ),
    <span
      onClick={() => props.deleteCommentFromAdvert(props.advertId, props.id)}
    >
      Remove post
    </span>,
  ];
  return (
    <Comment
      author={<a>{props.name}</a>}
      actions={actions}
      avatar={
        <Avatar
          size={"large"}
          shape="circle"
          src={
            props.avatar
              ? props.avatar
              : "https://www.kino-teatr.ru/movie/kadr/36398/pv_82319.jpg"
          }
          alt="Han Solo"
        />
      }
      content={<p>{props.text}</p>}
    />
  );
};

export default CommentAdvert;
