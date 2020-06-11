import React from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';

const Header = (props) => {
    return (
        <div>
            {props.isAuth
                ? <div className={style.authorized}>
                    <div className={style.profileInfo}>
                        <img src={props.profile && props.profile.photos.small} className={style.avatar} alt=""/>
                        <div className={style.name}>{props.login}</div>
                    </div>
                    <Button onClick={props.logoutFromSocialNetwork}>Выйти</Button>
                  </div>
                : <div className={style.noAuthorized}><NavLink to="/login"><Button>Войти</Button></NavLink></div>}
        </div>
    );
}

export default Header;