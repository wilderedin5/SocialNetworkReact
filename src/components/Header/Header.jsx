import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.auth}>
                {props.isAuth 
                ? <div>
                    <div>{props.login}</div>
                    <button onClick={props.logoutFromSocialNetwork}>Logout</button>
                  </div> 
                : <div><NavLink to="/login"><button>Login</button></NavLink></div>}
            </div>
        </div>
    );
}

export default Header;