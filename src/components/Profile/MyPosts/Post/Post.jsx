import React from "react";
import styled from "@emotion/styled";
import { Tooltip, Comment as BaseComment, Avatar } from "antd";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
} from "@ant-design/icons";

const Comment = styled(BaseComment)`
  border: 1px solid rgb(189, 189, 189);
  color: #000;
  margin-bottom: 10px;
  padding: 0 10px;
  border-radius: 10px;
`;

const Post = ({
  liked,
  toggleLikePost,
  id,
  likeCount,
  deletePost,
  name,
  avatar,
  message,
}) => {
  const actions = [
    liked ? (
      <span key="comment-basic-like">
        <Tooltip title="Like">
          {React.createElement(liked === true ? DislikeFilled : LikeOutlined, {
            onClick: () => toggleLikePost(id),
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
              onClick: () => toggleLikePost(id),
            }
          )}
        </Tooltip>
        <span className="comment-action">{likeCount}</span>
      </span>
    ),
    <span onClick={() => deletePost(id)}>удалить пост</span>,
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
      content={<p>{message}</p>}
    />
  );
};

export default Post;
