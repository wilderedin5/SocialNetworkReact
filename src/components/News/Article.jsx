import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Button } from "../common/type";
import { Note } from "../common/type";

const Container = styled.div`
  border: 1px solid #2d50a5;
  padding: 10px 5px;
`;

const Tools = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 175px);
  grid-column-gap: 10px;
  margin-top: 10px;
`;

export const Article = ({ news, onMark, onDelete, isOpened, className }) => {
  const { theme, author, date, category, isMarked, id } = news;
  return (
    <Container className={className}>
      <Note label="Theme" value={theme} />
      <Note label="Author" value={author} />
      <Note label="Date" value={date} />
      <Note label="Category" value={category} />
      <Tools>
        <Button onClick={onMark}>
          {isMarked ? "Remove mark" : "Add to mark"}
        </Button>
        <Button onClick={onDelete}>Remove news</Button>
        <NavLink to={`/news/${isOpened ? "" : id}`}>
          <Button>
            {isOpened ? "Return to news page" : "Go to this news"}
          </Button>
        </NavLink>
      </Tools>
    </Container>
  );
};
