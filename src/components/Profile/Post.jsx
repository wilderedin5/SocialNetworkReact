import React from "react";
import styled from "@emotion/styled";
import { Tooltip, Comment as BaseComment, Avatar } from "antd";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
} from "@ant-design/icons";
import NoAvatar from '../../assets/image/noAvatar.jpg'

const Comment = styled(BaseComment)`
  border: 1px solid rgb(189, 189, 189);
  margin-bottom: 10px;
  padding: 0 10px;
  border-radius: 10px;
`;

export const Post = ({
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
    <span key="comment-basic-slike">
      <Tooltip title={liked ? 'Like' : 'Dislike'}>
        {liked ? React.createElement(
          liked === false || liked === null ? LikeOutlined : DislikeOutlined,
          {
            onClick: () => toggleLikePost(id),
          }
        ) : React.createElement(liked === true ? DislikeFilled : LikeOutlined, {
          onClick: () => toggleLikePost(id),
        })}
      </Tooltip>
      <span className="comment-action">{likeCount}</span>
    </span>,
    <span onClick={() => deletePost(id)}>Remove post</span>,
  ];
  return (
    <Comment
      author={name}
      actions={actions}
      avatar={
        <Avatar
          size="large"
          src={avatar || NoAvatar}
          alt={name}
        />
      }
      content={<p>{message}</p>}
    />
  );
};