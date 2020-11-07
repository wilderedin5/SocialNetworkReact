import React from "react";
import styled from "@emotion/styled";
import { Button as BaseButton } from "antd";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  border: 1px solid rgb(45, 80, 165);
  padding: 10px 5px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Tools = styled.div`
  margin-top: 10px;
`;

const Button = styled(BaseButton)`
  :not(:last-child) {
    margin-right: 10px;
  }
`

export const OneNews = ({
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
      <div>{newsOpened ? newsText : newsText.substring(0, 200)}.....</div>
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
      <Tools>
        <Button onClick={() => toggleBookmarks(newsId, !inBookmarks)}>
          {inBookmarks ? 'Remove from bookmarks' : 'Add in bookmarks'}
        </Button>
        <Button onClick={() => deleteNews(newsId)}>Remove news</Button>
        <NavLink to={`/news/${newsOpened ? '' : newsId}`}>
          <Button>{newsOpened ? 'Return to news page' : 'Go to this news'}</Button>
        </NavLink>
      </Tools>
    </Container>
  );