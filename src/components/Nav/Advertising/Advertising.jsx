import React from 'react';
import { Carousel } from 'antd';
import style from './Advertising.module.scss';
import { NavLink } from 'react-router-dom';

const Advertising = (props) => {
    return (
        <Carousel className={style.slider}>
            {
                props.advertising.map(advert => <NavLink to={`/adverts/${advert.id}`}>
                    <div className={style.slide}>
                        <img src={advert.image} alt="" />
                    </div>
                </NavLink>)
            }
        </Carousel>
    )
}

export default Advertising;