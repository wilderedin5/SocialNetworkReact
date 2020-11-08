import React from "react";
import { Tooltip, Avatar, Comment as BaseComment } from "antd";
import styled from "@emotion/styled";
import { LikeOutlined, DislikeFilled } from "@ant-design/icons";
import NoAvatar from '../../assets/image/noAvatar.jpg'

const CommentContainer = styled(BaseComment)`
  border: 1px solid grey;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 0 5px;
`;

export const Comment = ({
  likeComment,
  liked,
  likeCount,
  deleteComment,
  name,
  avatar,
  text,
}) => {
  const actions = [
    <span key="comment-basic-dislike">
      <Tooltip title={liked ? 'Like' : 'Dislike'}>
        {React.createElement(
          liked ? DislikeFilled : LikeOutlined,
          {
            onClick: likeComment,
          }
        )}
      </Tooltip>
      <span className="comment-action">{likeCount}</span>
    </span>,
    <span onClick={deleteComment}>Remove post</span>,
  ];
  return (
    <CommentContainer
      author={name}
      actions={actions}
      avatar={
        <Avatar
          size="large"
          src={avatar || NoAvatar}
          alt={name}
        />
      }
      content={<p>{text}</p>}
    />
  );
};