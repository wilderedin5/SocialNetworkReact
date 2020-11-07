import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { toggleBookmarks } from "../../redux/news-reducer";
import { getBookmarks } from "../../redux/Selectors/news-selectors";
import { getLastFriends } from "../../redux/sidebar-reducer";
import { Nav } from "./Nav";

const NavContainer = (props) => {
  useEffect(() => {
    props.getLastFriends(1, 9);
  }, []);

  return (
    <Nav
      url={props.history.location.pathname}
      {...props}
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
