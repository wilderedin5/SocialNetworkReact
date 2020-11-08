import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { toggleBookmarks } from "../../redux/news-reducer";
import { getBookmarks } from "../../redux/Selectors/news-selectors";
import { getLastFriends } from "../../redux/sidebar-reducer";
import { Advertising } from "./Advertising";
import { Friends } from "./Friends";
import { Bookmarks } from "./Bookmarks";

const Container = styled.div``;

const NavBar = ({ history, getLastFriends, friends, isAuth, toggleBookmarks, bookMarks, advertising }) => {
  useEffect(() => {
    getLastFriends(1, 9);
  }, []);

  return (
    <Container>
      <Menu theme="dark" defaultSelectedKeys={history.location.pathname} mode="inline">
        <Menu.Item key="/profile">
          <NavLink to="/profile" activeClassName="active">
            Profile
        </NavLink>
        </Menu.Item>
        <Menu.Item key="/dialogs">
          <NavLink to="/dialogs" activeClassName="active">
            Messages
        </NavLink>
        </Menu.Item>
        <Menu.Item key="/news">
          <NavLink to="/news" activeClassName="active">
            News
        </NavLink>
        </Menu.Item>
        <Menu.Item key="/users">
          <NavLink to="/users" activeClassName="active">
            Users
        </NavLink>
        </Menu.Item>
        <Menu.Item key="/help">
          <NavLink to="/help" activeClassName="active">
            Help
        </NavLink>
        </Menu.Item>
        <Menu.Item key="/order-advert">
          <NavLink to="/order-advert" activeClassName="active">
            Manage advert
        </NavLink>
        </Menu.Item>
      </Menu>
      {isAuth && <Friends friends={friends} />}
      <Bookmarks toggleBookmarks={toggleBookmarks} bookMarks={bookMarks} />
      <Advertising advertising={advertising} />
    </Container>
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
)(NavBar);