import React from "react";
import { v4 } from "uuid";
import Form from "./form";
import { Comments } from "./comments";
import { Content } from "./content";

export const Advert = ({ contentProps, id, commentProps, addComment }) => {
  const handleSubmit = ({ text, author }) => {
    addComment(id, v4(), text, author);
  };

  return (
    <div>
      <Content {...contentProps} />
      <Comments {...commentProps} id={id} />
      <Form onSubmit={handleSubmit} />
    </div>
  );
};
