import React from 'react';
import style from './OneAdvert.module.scss';

const OneAdvert = (props) => {
    return (
        <div>
            <div className={style.image}>
                <img src={props.image} alt=""/>
            </div>
            <div className={style.title}>
                {props.title}
            </div>
            <div className={style.text}>
                {props.text}
            </div>
        </div>
    )
}

export default OneAdvert;