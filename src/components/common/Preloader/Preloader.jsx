import React from 'react';
import preloader from './../../../assets/image/preloader.svg';
import style from './Preloader.module.scss';

const Preloader = () => {
    return (
        <div className={style.preloader}>
            <img src={preloader} alt=""/>
        </div>
    );
}

export default Preloader;