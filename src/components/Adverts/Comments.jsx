import React from "react";
import { Comment } from "./Comment";

export const Comments = ({ comments, id, setLike, deleteComment }) => (
  <div>
    {comments.map((comment) => (
      <Comment
        key={comment.text}
        {...comment}
        setLike={(hasLike) => setLike(id, comment.id, hasLike)}
        onRemove={() => deleteComment(id, comment.id)}
      />
    ))}
  </div>
);
