import React from "react";
import { v4 } from "uuid";
import styled from "@emotion/styled";
import Form from "./form";
import { Comments } from "./comments";
import { Content } from "./content";

const StyledContent = styled(Content)`
  margin-bottom: 10px;
`;

export const Advert = ({ contentProps, id, commentProps, addComment }) => {
  const handleSubmit = ({ text, author }) => {
    addComment(id, v4(), text, author);
  };

  return (
    <div>
      <StyledContent {...contentProps} />
      <Comments {...commentProps} id={id} />
      <Form onSubmit={handleSubmit} />
    </div>
  );
};
