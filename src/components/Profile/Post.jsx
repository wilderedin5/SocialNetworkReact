import React from "react";
import styled from "@emotion/styled";
import { Tooltip, Comment as BaseComment, Avatar } from "antd";
import { LikeOutlined, DislikeFilled } from "@ant-design/icons";
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
  likeCount,
  deletePost,
  name,
  avatar,
  message,
}) => {
  const actions = [
    <span key="comment-basic-slike">
      <Tooltip title={liked ? 'Like' : 'Dislike'}>
        {React.createElement(
          liked ? DislikeFilled : LikeOutlined,
          {
            onClick: toggleLikePost,
          }
        )}
      </Tooltip>
      <span className="comment-action">{likeCount}</span>
    </span>,
    <span onClick={deletePost}>Remove post</span>,
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