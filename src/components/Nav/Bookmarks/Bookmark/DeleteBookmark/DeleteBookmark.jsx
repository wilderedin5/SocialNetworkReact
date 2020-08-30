import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  color: #000;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

const DeleteBookmark = ({ toggleBookmarks, newsId }) => (
  <Container onClick={() => toggleBookmarks(newsId, false)}>&#9932;</Container>
);

export default DeleteBookmark;
