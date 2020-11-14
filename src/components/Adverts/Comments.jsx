import React from "react";
import { Comment } from "./Comment";

export const Comments = ({ comment, id, likeComment, deleteComment }) => (
  <div>
    {comment.map((comment) => (
      <Comment key={comment.text}
        {...comment}
        advertId={id}
        likeComment={(hasLike) => likeComment(id, comment.id, hasLike)}
        deleteComment={() => deleteComment(id, comment.id)}
      />
    ))}
  </div>
)