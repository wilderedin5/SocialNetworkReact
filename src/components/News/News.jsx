
import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { deleteNews, addNews, toggleBookmarks } from "../../redux/news-reducer";
import { OneNews } from "./one-news";
import NewsForm from "./news-form";

const Container = styled.div`
  color: #000;
`;

const News = ({ addNews, news, toggleBookmarks, deleteNews, match }) => {
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

const mapStateToProps = (state) => ({
  news: state.newsPage.news,
});

export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, { deleteNews, addNews, toggleBookmarks })
)(News);
