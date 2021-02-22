import React from "react";
import styled from "@emotion/styled";
import { Comment as BaseComment } from "../common/comment";

const StyledComment = styled(BaseComment)`
  margin-bottom: 10px;
`;

export const Comments = ({ comments, id, changeLikeCount, deleteComment }) => (
  <div>
    {comments.map((comment) => (
      <StyledComment
        key={comment.text}
        changeLikeCount={(hasLike) => changeLikeCount(id, comment.id, hasLike)}
        onRemove={() => deleteComment(id, comment.id)}
        {...comment}
      />
    ))}
  </div>
);
