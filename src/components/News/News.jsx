import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { deleteNews, addNews, toggleBookmarks } from "../../redux/news-reducer";
import { Article } from "./Article";
import Form from "./Form";

const News = ({ addNews, news, toggleBookmarks, deleteNews, match }) => {
  const newsId = match.params.newsId;
  const formattedNews = newsId
    ? news.filter((news) => newsId === String(news.id))
    : news;

  const handleSubmit = ({ text, theme, author, category }) => {
    addNews(text, theme, author, category);
  };

  return (
    <div>
      {formattedNews.map((news) => (
        <Article
          key={news.id}
          deleteNews={() => deleteNews(news.id)}
          toggleBookmarks={() => toggleBookmarks(news.id, !news.inBookmarks)}
          isOpened={newsId}
          {...news}
        />
      ))}
      {!newsId && <Form onSubmit={handleSubmit} />}
    </div>
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
