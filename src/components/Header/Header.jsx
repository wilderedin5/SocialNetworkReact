import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.auth}>
                {props.isAuth 
                ? <div>{props.login} <button onClick={props.logoutFromSocialNetwork}>LOGOUT</button></div> 
                : <div><NavLink to="/login">Login</NavLink></div>}
            </div>
        </div>
    );
}

export default Header;