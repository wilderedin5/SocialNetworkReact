import React, { useState } from "react";
import { Tooltip, Avatar, Comment as BaseComment } from "antd";
import styled from "@emotion/styled";
import { LikeOutlined, DislikeFilled } from "@ant-design/icons";
import NoAvatar from "../../assets/image/noAvatar.jpg";

const CommentContainer = styled(BaseComment)`
  border: 1px solid grey;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 0 5px;
`;

export const Comment = ({
  toggleLike,
  likeCount,
  deleteComment,
  name,
  avatar,
  text,
}) => {
  const [hasLike, setHasLike] = useState(false);

  const handleCommentLike = () => {
    setHasLike(!hasLike);
    toggleLike(hasLike);
  };

  const actions = [
    <span>
      <Tooltip title={hasLike ? "Like" : "Dislike"}>
        {React.createElement(hasLike ? DislikeFilled : LikeOutlined, {
          onClick: handleCommentLike,
        })}
      </Tooltip>
      <span className="comment-action">{likeCount}</span>
    </span>,
    <span onClick={deleteComment}>Remove post</span>,
  ];
  return (
    <CommentContainer
      author={name}
      actions={actions}
      avatar={<Avatar size="large" src={avatar || NoAvatar} alt={name} />}
      content={<p>{text}</p>}
    />
  );
};
