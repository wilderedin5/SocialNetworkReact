import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import Advertising from "./Advertising/Advertising";
import Friends from "./Friends/Friends";
import Bookmarks from "./Bookmarks/Bookmarks";

const Container = styled.div`
  .list {
    list-style-type: none;
    font-size: 24px;
    & li {
      padding: 5px;
      background: rgb(25, 115, 200);
      margin-bottom: 5px;
      @media (max-width: 576px) {
        padding: 0 5px;
        font-size: 18px;
      }
    }
    & a {
      color: #fff;
      text-decoration: none;
    }
  }

  .active {
    color: red;
    & li {
      background: rgb(30, 45, 190);
    }
  }
`;

const Nav = ({
  url,
  friends,
  isAuth,
  toggleBookmarks,
  bookMarks,
  advertising,
}) => (
  <Container>
    <Menu theme="dark" defaultSelectedKeys={url} mode="inline">
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

export default Nav;
