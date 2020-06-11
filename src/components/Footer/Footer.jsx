import React from 'react';
import style from './Footer.module.scss';

const Footer = (props) => {
    return (
        <div className={style.copyright}>
            {props.copyright}
        </div>
    )
}

export default Footer;