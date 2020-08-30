import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { deleteNews, addNews, toggleBookmarks } from "../../redux/news-reducer";
import News from "./News";

const mapStateToProps = (state) => ({
  news: state.newsPage.news,
});

export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, { deleteNews, addNews, toggleBookmarks })
)(News);
