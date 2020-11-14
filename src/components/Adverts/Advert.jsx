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
  toggleLike,
  comments,
  deleteComment,
  addComment,
}) => {
  const handleSubmit = ({ commentText, name }) => {
    addComment(id, v4(), commentText, name);
  };

  return (
    <Container>
      <Content image={image} title={title} text={text} />

      <Comments
        id={id}
        toggleLike={toggleLike}
        comments={comments}
        deleteComment={deleteComment}
      />

      <Form onSubmit={handleSubmit} />
    </Container>
  );
};
