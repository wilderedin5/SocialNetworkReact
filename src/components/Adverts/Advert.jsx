import React from "react";
import { v4 } from "uuid";
import styled from "@emotion/styled";
import AdvertForm from "./advert-form";
import { Comments } from "./advert-comments";
import { AdvertContent } from "./advert-content";

const Container = styled.div`
  color: #000;
`

export const Advert = ({
  image,
  title,
  text,
  liked,
  id,
  likeComment,
  comment,
  deleteComment,
  likeCount,
  addComment,
  toggleLike,
}) => {
  const sendComment = (formData) => {
    addComment(id, v4(), formData.commentText, formData.name, false, 0);
  };

  const CommentsProps = {
    id,
    likeComment,
    comment,
    deleteComment
  }

  const ContentProps = {
    id,
    image,
    title,
    text,
    liked,
    likeCount,
    toggleLike
  }

  return (
    <Container>
      <AdvertContent {...ContentProps} />

      <Comments {...CommentsProps} />

      <AdvertForm onSubmit={sendComment} />
    </Container>
  );
};