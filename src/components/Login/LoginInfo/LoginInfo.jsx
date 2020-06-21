import React from 'react';
import style from './LoginInfo.module.scss';

const LoginInfo = (props) => (
    <div className={style.loginInfo}>
        <span><b>Данные для входа:</b></span>
        <span><b>Логин: </b>wildnefalem5@gmail.com</span>
        <span><b>Пароль: </b>testmysoc876a</span>
        <span>Если будут проблемы, пишите, звоните.</span>
    </div>
)

export default LoginInfo;