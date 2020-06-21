import React from 'react';
import style from './Preloader.module.scss';

const Preloader = () => (
    <div className={style.preloader}>
        <div className={style.circle}></div>
    </div>
)

export default Preloader;