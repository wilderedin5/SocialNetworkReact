import React from 'react';
import style from './Nav.module.css'
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Nav = (props) => {
  return (
    <div>
      <ul className={style.list}>
        <li>
          <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" activeClassName={style.activeLink}>Messages</NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName={style.activeLink}>News</NavLink>
        </li>
        <li>
          <NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName={style.activeLink}>Users</NavLink>
        </li>
      </ul>
      <Friends friends={props.friends} />
    </div>
  );
}

export default Nav;