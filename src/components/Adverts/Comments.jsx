import React from "react";
import { Comment } from "./Comment";

export const Comments = ({ comments, id, toggleLike, deleteComment }) => (
  <div>
    {comments.map((comment) => (
      <Comment
        key={comment.text}
        {...comment}
        toggleLike={(hasLike) => toggleLike(id, comment.id, hasLike)}
        deleteComment={() => deleteComment(id, comment.id)}
      />
    ))}
  </div>
);
