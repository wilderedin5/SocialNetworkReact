import React from "react";
import styled from "@emotion/styled";
import { OneNews } from "./one-news";
import NewsForm from "./news-form";

const Container = styled.div`
  color: #000;
`;

export const News = ({ addNews, news, toggleBookmarks, deleteNews, match }) => {
  const newsId = match.params.newsId;
  const formattedNews = newsId ? news.filter((news) => newsId === String(news.id)) : news

  const onSubmit = ({ newsText, theme, author, category }) => {
    addNews(
      newsText,
      theme,
      author,
      category
    );
  };

  return (
    <Container>
      {formattedNews.map((news) =>
        <OneNews
          key={news.id}
          deleteNews={deleteNews}
          toggleBookmarks={toggleBookmarks}
          newsOpened={newsId}
          newsId={news.id}
          {...news}
        />)
      }
      {!newsId && <NewsForm onSubmit={onSubmit} />}
    </Container>
  );
};
