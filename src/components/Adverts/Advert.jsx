import React from "react";
import { v4 } from "uuid";
import styled from "@emotion/styled";
import Form from "./Form";
import { Comments } from "./Comments";
import { Content } from "./Content";

const Container = styled.div`
  color: #000;
`;

export const Advert = ({
  image,
  title,
  text,
  id,
  likeComment,
  comment,
  deleteComment,
  likeCount,
  addComment,
  toggleLike,
}) => {
  const handleSubmit = ({ commentText, name }) => {
    addComment(id, v4(), commentText, name);
  };

  const CommentsProps = {
    id,
    likeComment,
    comment,
    deleteComment,
  };

  const ContentProps = {
    id,
    image,
    title,
    text,
    likeCount,
    toggleLike,
  };

  return (
    <Container>
      <Content {...ContentProps} />

      <Comments {...CommentsProps} />

      <Form onSubmit={handleSubmit} />
    </Container>
  );
};
