import React from "react";
import styled from "@emotion/styled";
import OneNews from "./OneNews/OneNews";
import NewsForm from "./NewsForm/NewsForm";

const Container = styled.div`
  color: #000;
`;

const News = ({
  addNewNews,
  news,
  toggleSetToBookmarks,
  deleteNews,
  match,
}) => {
  const newsId = match.params.newsId;
  const onSubmit = (formData) => {
    addNewNews(
      formData.newsText,
      formData.theme,
      formData.author,
      formData.category
    );
  };
  return (
    <Container>
      {newsId
        ? news
            .filter((news) => newsId === String(news.id))
            .map((news) => (
              <OneNews
                key={news.id}
                deleteNews={deleteNews}
                toggleSetToBookmarks={toggleSetToBookmarks}
                newsOpened={newsId}
                newsId={news.id}
                {...news}
              />
            ))
        : news.map((news) => (
            <OneNews
              key={news.id}
              deleteNews={deleteNews}
              toggleSetToBookmarks={toggleSetToBookmarks}
              newsOpened={newsId}
              newsId={news.id}
              {...news}
            />
          ))}
      {!newsId && <NewsForm onSubmit={onSubmit} />}
    </Container>
  );
};

export default News;
