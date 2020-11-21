import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Button } from "../common/type";
import { Note } from "../common/type";

const Container = styled.div`
  border: 1px solid rgb(45, 80, 165);
  padding: 10px 5px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Tools = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 175px);
  grid-column-gap: 10px;
  margin-top: 10px;
`;

export const Article = ({
  isOpened,
  text,
  theme,
  author,
  date,
  category,
  inBookmarks,
  deleteNews,
  id,
  toggleBookmarks,
}) => (
  <Container>
    <div>{isOpened ? text : text.substring(0, 200)}.....</div>
    <Note label="Theme" value={theme} />
    <Note label="Author" value={author} />
    <Note label="Date" value={date} />
    <Note label="Category" value={category} />
    <Tools>
      <Button onClick={toggleBookmarks}>
        {inBookmarks ? "Remove bookmarks" : "Add to bookmarks"}
      </Button>
      <Button onClick={deleteNews}>Remove news</Button>
      <NavLink to={`/news/${isOpened ? "" : id}`}>
        <Button>{isOpened ? "Return to news page" : "Go to this news"}</Button>
      </NavLink>
    </Tools>
  </Container>
);
