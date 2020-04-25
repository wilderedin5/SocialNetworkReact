import React from 'react';
import style from './Bookmark.module.scss';

const Bookmark = (props) => {
    return (
        <div className={style.bookmark}>
            <div>{props.theme}</div>
            {props.inBookmarks &&
                <div onClick={() => props.toggleSetToBookmarks(props.newsId,false)} className={style.bookmarkDelete}>&#9932;</div>
            }
        </div>
    )
}

export default Bookmark;