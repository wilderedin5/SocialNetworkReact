import React from "react";
import { v4 } from "uuid";
import Form from "./Form";
import { Comments } from "./Comments";
import { Content } from "./Content";

export const Advert = ({ contentProps, id, commentProps, addComment }) => {
  const handleSubmit = ({ commentText, name }) => {
    addComment(id, v4(), commentText, name);
  };

  return (
    <div>
      <Content {...contentProps} />
      <Comments {...commentProps} id={id} />
      <Form onSubmit={handleSubmit} />
    </div>
  );
};
