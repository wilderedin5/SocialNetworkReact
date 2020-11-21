import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { deleteNews, addNews, setMark } from "../../redux/news-reducer";
import { Article } from "./Article";
import Form from "./Form";

const News = ({ addNews, news, setMark, deleteNews, match }) => {
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
          onDelete={() => deleteNews(news.id)}
          onMark={() => setMark(news.id, !news.isMarked)}
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
  connect(mapStateToProps, { deleteNews, addNews, setMark })
)(News);
