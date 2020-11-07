import React from "react";
import { Post } from "./advert-comment";

export const Comments = ({ comment, id, ...rest }) => (
  <div>
    {comment.map((comment) => (
      <Post
        {...comment}
        {...rest}
        advertId={id}
      />
    ))}
  </div>
)