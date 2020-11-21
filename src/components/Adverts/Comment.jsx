import React, { useState } from "react";
import styled from "@emotion/styled";
import { Comment as BaseComment } from "../common/comment";

const StyledComment = styled(BaseComment)`
  margin-bottom: 10px;
`;

export const Comment = ({ setLike, ...props }) => {
  const [hasLike, setHasLike] = useState(false);

  const handleCommentLike = () => {
    setHasLike(!hasLike);
    setLike(hasLike);
  };

  return (
    <StyledComment onLike={handleCommentLike} hasLike={hasLike} {...props} />
  );
};
