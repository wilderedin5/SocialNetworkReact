import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { toggleBookmarks } from "../../redux/news-reducer";
import { getBookmarks } from "../../redux/Selectors/news-selectors";
import { getFriends } from "../../redux/sidebar-reducer";
import { Advertising } from "./Advertising";
import { Friends } from "./Friends";
import { Bookmarks } from "./Bookmarks";

const MenuItem = ({ to, ...props }) => {
  const url = `/${to.toLowerCase()}`;
  return (
    <Menu.Item key={url} {...props}>
      <NavLink to={url} activeClassName="active">
        {to}
      </NavLink>
    </Menu.Item>
  );
};

const NavBar = ({
  history,
  getFriends,
  friends,
  isAuth,
  toggleBookmarks,
  bookMarks,
  advertising,
}) => {
  useEffect(() => {
    getFriends(1, 9);
  }, [isAuth]);

  return (
    <div>
      <Menu
        theme="dark"
        defaultSelectedKeys={history.location.pathname}
        mode="inline"
      >
        <MenuItem to="Profile" />
        <MenuItem to="Dialogs" />
        <MenuItem to="News" />
        <MenuItem to="Users" />
        <MenuItem to="Help" />
        <MenuItem to="Order-advert" />
      </Menu>
      {isAuth && <Friends friends={friends} />}
      <Bookmarks
        toggleBookmarks={toggleBookmarks}
        bookMarks={bookMarks || []}
      />
      <Advertising advertising={advertising || []} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  friends: state.sidebar.friends,
  bookMarks: getBookmarks(state),
  isAuth: state.auth.isAuth,
  advertising: state.adverts.advertising,
});

export default compose(
  connect(mapStateToProps, { toggleBookmarks, getFriends }),
  withRouter
)(NavBar);
