import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {


    return (
        <div className={style.header}>
            {props.isAuth
                ? <div className={style.authorized}>
                    <div className={style.profileInfo}>
                        <img src={props.profile && props.profile.photos.small} className={style.avatar} alt=""/>
                        <div className={style.name}>{props.login}</div>
                    </div>
                    <button onClick={props.logoutFromSocialNetwork}>Logout</button>
                  </div>
                : <div className={style.noAuthorized}><NavLink to="/login"><button>Login</button></NavLink></div>}
        </div>
    );
}

export default Header;