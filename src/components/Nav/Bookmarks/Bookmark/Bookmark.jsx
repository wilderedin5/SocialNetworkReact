import React from 'react';
import style from './Bookmark.module.scss';

const Bookmark = (props) => {
    return (
    <div className={style.bookmark}>{props.theme}</div>
    )
}

export default Bookmark;