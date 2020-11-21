import React, { useState } from "react";
import styled from "@emotion/styled";
import { Comment as BaseComment } from "../common/comment";

const StyledComment = styled(BaseComment)`
  margin-bottom: 10px;
`;

export const Comment = ({ toggleLike, deleteComment, ...props }) => {
  const [hasLike, setHasLike] = useState(false);

  const handleCommentLike = () => {
    setHasLike(!hasLike);
    toggleLike(hasLike);
  };

  return (
    <StyledComment
      onLike={handleCommentLike}
      onRemove={deleteComment}
      hasLike={hasLike}
      {...props}
    />
  );
};
