import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(45, 80, 165);
  padding: 10px 5px;
  border-radius: 10px;
  margin-bottom: 10px;
  position: relative;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 5px;
  right: 5px;
  & button:not(:last-child) {
    margin-right: 10px;
  }
`;

const OneNews = ({
  newsOpened,
  newsText,
  theme,
  author,
  date,
  category,
  inBookmarks,
  deleteNews,
  newsId,
  toggleBookmarks,
}) => (
  <Container>
    {newsOpened ? (
      <div>{newsText}</div>
    ) : (
      <div>{newsText.substring(0, 200)}.....</div>
    )}
    <div>
      <b>Theme:</b> {theme}
    </div>
    <div>
      <b>Author:</b> {author}
    </div>
    <div>
      <b>Date:</b> {date}
    </div>
    <div>
      <b>Category:</b> {category}
    </div>
    <Flex>
      {inBookmarks ? (
        <Button onClick={() => toggleBookmarks(newsId, false)}>
          Remove from bookmarks
        </Button>
      ) : (
        <Button onClick={() => toggleBookmarks(newsId, true)}>
          Add in bookmarks
        </Button>
      )}
      <Button onClick={() => deleteNews(newsId)}>Remove news</Button>
      {newsOpened ? (
        <NavLink to={`/news`}>
          <Button>Return to news page</Button>
        </NavLink>
      ) : (
        <NavLink to={`/news/${newsId}`}>
          <Button>Go to this news</Button>
        </NavLink>
      )}
    </Flex>
  </Container>
);

export default OneNews;
