import React from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import { toggleBookmarks } from "../../redux/news-reducer";
import { getBookmarks } from "../../redux/Selectors/news-selectors";
import { useEffect } from "react";
import { getLastFriends } from "../../redux/sidebar-reducer";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

const NavContainer = (props) => {
  useEffect(() => {
    props.getLastFriends(1, 9);
  }, []);
  return (
    <Nav
      url={props.history.location.pathname}
      advertising={props.advertising}
      isAuth={props.isAuth}
      friends={props.friends}
      bookMarks={props.bookMarks}
      toggleBookmarks={props.toggleBookmarks}
    />
  );
};

const mapStateToProps = (state) => ({
  friends: state.sidebar.friends,
  bookMarks: getBookmarks(state),
  isAuth: state.auth.isAuth,
  advertising: state.adverts.advertising,
});

export default compose(
  connect(mapStateToProps, { toggleBookmarks, getLastFriends }),
  withRouter
)(NavContainer);
