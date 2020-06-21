import React from 'react';
import style from './Nav.module.scss'
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import Bookmarks from './Bookmarks/Bookmarks';
import { Menu } from 'antd';
import Advertising from './Advertising/Advertising';

const Nav = (props) => (
  <div>
    <Menu theme="dark" defaultSelectedKeys={props.url} mode="inline">
      <Menu.Item key="/profile">
        <NavLink to="/profile" activeClassName={style.activeLink}>
          Профиль
          </NavLink>
      </Menu.Item>
      <Menu.Item key="/dialogs">
        <NavLink to="/dialogs" activeClassName={style.activeLink}>
          Сообщения
          </NavLink>
      </Menu.Item>
      <Menu.Item key="/news">
        <NavLink to="/news" activeClassName={style.activeLink}>
          Новости
          </NavLink>
      </Menu.Item>
      <Menu.Item key="/users">
        <NavLink to="/users" activeClassName={style.activeLink}>
          Пользователи
          </NavLink>
      </Menu.Item>
      <Menu.Item key="/help">
        <NavLink to="/help" activeClassName={style.activeLink}>
          Помощь
          </NavLink>
      </Menu.Item>
      <Menu.Item key="/order-advert">
        <NavLink to="/order-advert" activeClassName={style.activeLink}>
          Управление рекламой
          </NavLink>
      </Menu.Item>
    </Menu>
    {props.isAuth &&
      <Friends friends={props.friends} />
    }
    <Bookmarks toggleSetToBookmarks={props.toggleSetToBookmarks} bookMarks={props.bookMarks} />
    <Advertising advertising={props.advertising} />
  </div>
)

export default Nav;