import React from "react";
import { Comment } from "./Comment";

export const Comments = ({ comment, id, likeComment, deleteComment }) => (
  <div>
    {comment.map(com => (
      <Comment
        {...com}
        advertId={id}
        likeComment={() => likeComment(id, com.id)}
        deleteComment={() => deleteComment(id, com.id)}
      />
    ))}
  </div>
)