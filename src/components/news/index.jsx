import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { v4 } from "uuid";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { manageNews, setMark } from "../../redux/news-reducer";
import { Article } from "./article";
import Form from "./form";

const StyledArticle = styled(Article)`
  & + & {
    margin-top: 10px;
  }
`;

const StyledForm = styled(Form)`
  margin-top: 10px;
`;

const News = ({ news, setMark, manageNews }) => {
  const { newsId } = useParams();

  const formatNews = news.filter(({ id }) =>
    newsId ? newsId === String(id) : true
  );

  const handleSubmit = ({ text, theme, author, category }) => {
    const id = v4();
    manageNews(id, { id, text, theme, author, category });
  };

  return (
    <div>
      {formatNews.map((news) => (
        <StyledArticle
          key={news.id}
          onDelete={() => manageNews(news.id)}
          onMark={() => setMark(news.id, !news.isMarked)}
          isOpened={newsId}
          news={news}
        />
      ))}
      {!newsId && <StyledForm onSubmit={handleSubmit} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  news: state.newsPage.news,
});

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { manageNews, setMark })
)(News);
