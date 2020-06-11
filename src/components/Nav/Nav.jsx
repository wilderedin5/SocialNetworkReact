import React from 'react';
import style from './Nav.module.scss'
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import Bookmarks from './Bookmarks/Bookmarks';
import { Menu } from 'antd';
import Advertising from './Advertising/Advertising';

const Nav = (props) => {
  return (
    <div>
      <Menu theme="dark" defaultOpenKeys={'1'} mode="inline">
        <Menu.Item key="1">
          <NavLink to="/profile" activeClassName={style.activeLink}>
            Профиль
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/dialogs" activeClassName={style.activeLink}>
            Сообщения
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/news" activeClassName={style.activeLink}>
            Новости
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/users" activeClassName={style.activeLink}>
            Пользователи
          </NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <NavLink to="/help" activeClassName={style.activeLink}>
            Помощь
          </NavLink>
        </Menu.Item>
        <Menu.Item key="6">
          <NavLink to="/order-advert" activeClassName={style.activeLink}>
            Заказать рекламу
          </NavLink>
        </Menu.Item>
      </Menu>
      {props.isAuth &&
        <Friends friends={props.friends} />
      }
      <Bookmarks toggleSetToBookmarks={props.toggleSetToBookmarks} bookMarks={props.bookMarks} />
      <Advertising advertising={props.advertising} />
    </div>
  );
}

export default Nav;