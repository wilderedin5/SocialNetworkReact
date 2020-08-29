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

const Post = ({
  toggleLikeCommentFromAdvert,
  liked,
  advertId,
  id,
  likeCount,
  deleteCommentFromAdvert,
  name,
  avatar,
  text,
}) => {
  const actions = [
    liked ? (
      <span key="comment-basic-like">
        <Tooltip title="Like">
          {React.createElement(liked === true ? DislikeFilled : LikeOutlined, {
            onClick: () => toggleLikeCommentFromAdvert(advertId, id),
          })}
        </Tooltip>
        <span className="comment-action">{likeCount}</span>
      </span>
    ) : (
      <span key=' key="comment-basic-dislike"'>
        <Tooltip title="Dislike">
          {React.createElement(
            liked === false || liked === null ? LikeOutlined : DislikeOutlined,
            {
              onClick: () => toggleLikeCommentFromAdvert(advertId, id),
            }
          )}
        </Tooltip>
        <span className="comment-action">{likeCount}</span>
      </span>
    ),
    <span onClick={() => deleteCommentFromAdvert(advertId, id)}>
      Remove post
    </span>,
  ];
  return (
    <Comment
      author={<a>{name}</a>}
      actions={actions}
      avatar={
        <Avatar
          size={"large"}
          shape="circle"
          src={
            avatar
              ? avatar
              : "https://www.kino-teatr.ru/movie/kadr/36398/pv_82319.jpg"
          }
          alt="Han Solo"
        />
      }
      content={<p>{text}</p>}
    />
  );
};

export default Post;
