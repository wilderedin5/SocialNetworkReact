import React from 'react';
import style from './Nav.module.scss'
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import Bookmarks from './Bookmarks/Bookmarks';

const Nav = (props) => {
  return (
    <div>
      <ul className={style.list}>
        <NavLink to="/profile" activeClassName={style.activeLink}>
          <li>
            Profile
            </li>
        </NavLink>
        <NavLink to="/dialogs" activeClassName={style.activeLink}>
          <li>
            Messages
            </li>
        </NavLink>
        <NavLink to="/news" activeClassName={style.activeLink}>
          <li>
            News
            </li>
        </NavLink>
        <NavLink to="/settings" activeClassName={style.activeLink}>
          <li>
            Settings
            </li>
        </NavLink>
        <NavLink to="/users" activeClassName={style.activeLink}>
          <li>
            Users
            </li>
        </NavLink>
      </ul>
      <Friends friends={props.friends} />
      <Bookmarks toggleSetToBookmarks={props.toggleSetToBookmarks} bookMarks={props.bookMarks} />
    </div>
  );
}

export default Nav;