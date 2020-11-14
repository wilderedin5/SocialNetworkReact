import React from "react";
import { v4 } from "uuid";
import styled from "@emotion/styled";
import Form from "./Form";
import { Comments } from "./Comments";
import { Content } from "./Content";

const Container = styled.div`
  color: #000;
`;

export const Advert = ({ contentProps, id, commentProps, addComment }) => {
  const handleSubmit = ({ commentText, name }) => {
    addComment(id, v4(), commentText, name);
  };

  return (
    <Container>
      <Content {...contentProps} />
      <Comments {...commentProps} id={id} />
      <Form onSubmit={handleSubmit} />
    </Container>
  );
};
