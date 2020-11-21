import React from "react";
import { v4 } from "uuid";
import Form from "./Form";
import { Comments } from "./Comments";
import { Content } from "./Content";

export const Advert = ({ contentProps, id, commentProps, addComment }) => {
  const handleSubmit = ({ commentText, author }) => {
    addComment(id, v4(), commentText, author);
  };

  return (
    <div>
      <Content {...contentProps} />
      <Comments {...commentProps} id={id} />
      <Form onSubmit={handleSubmit} />
    </div>
  );
};
