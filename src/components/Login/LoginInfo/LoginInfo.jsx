import React from 'react';
import style from './LoginInfo.module.scss';

const LoginInfo = (props) => {
    return (
        <div className={style.loginInfo}>
            <span><b>Данные для входа:</b></span>
            <span><b>Логин: </b>free@samuraijs.com</span>
            <span><b>Пароль: </b>free</span>
            <span><i>На тестовом аккаунте не работает загрузка аватарки!!! На моем аккаунте с оплаченным API все нормально, если потребуется могу продемонстрировать.</i></span>
        </div>
    )
}

export default LoginInfo;