import React from "react";
import { Tooltip, Avatar, Comment as BaseComment } from "antd";
import styled from "@emotion/styled";
import NoAvatar from '../../assets/image/noAvatar.jpg'
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
`;

export const Post = ({
  likeComment,
  liked,
  advertId,
  id,
  likeCount,
  deleteComment,
  name,
  avatar,
  text,
}) => {
  const actions = [
    <span key="comment-basic-dislike">
      <Tooltip title={liked ? 'Like' : 'Dislike'}>
        {liked ?
          React.createElement(liked === true ? DislikeFilled : LikeOutlined, {
            onClick: () => likeComment(advertId, id),
          })
          :
          React.createElement(
            liked === false || liked === null ? LikeOutlined : DislikeOutlined,
            {
              onClick: () => likeComment(advertId, id),
            }
          )
        }
      </Tooltip>
      <span className="comment-action">{likeCount}</span>
    </span>,
    <span onClick={() => deleteComment(advertId, id)}>Remove post</span>,
  ];
  return (
    <Comment
      author={name}
      actions={actions}
      avatar={
        <Avatar
          size="large"
          src={
            avatar || NoAvatar
          }
          alt={name}
        />
      }
      content={<p>{text}</p>}
    />
  );
};
